"""Сжатие фото квартир (бэкап в _backup/images) + генерация OG-обложки."""
import os
import shutil
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "public", "images")
BACKUP = os.path.join(ROOT, "_backup", "images")

# --- 1. Бэкап оригиналов ---
if not os.path.exists(BACKUP):
    shutil.copytree(IMG_DIR, BACKUP)
    print(f"backup -> {BACKUP}")
else:
    print("backup уже есть, пропускаю")

# --- 2. Сжатие ---
MAX_SIDE = 1920
QUALITY = 82
total_before = total_after = 0
for dirpath, _, files in os.walk(IMG_DIR):
    for fn in files:
        if not fn.lower().endswith((".jpg", ".jpeg")):
            continue
        p = os.path.join(dirpath, fn)
        before = os.path.getsize(p)
        total_before += before
        im = Image.open(p)
        im = im.convert("RGB")
        w, h = im.size
        if max(w, h) > MAX_SIDE:
            scale = MAX_SIDE / max(w, h)
            im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
        im.save(p, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        after = os.path.getsize(p)
        total_after += after
print(f"фото: {total_before/1e6:.1f} МБ -> {total_after/1e6:.1f} МБ")

# --- 3. OG-обложка 1200x630 ---
src = os.path.join(IMG_DIR, "chapaeva-14-2room", "chapaeva-01.jpg")
im = Image.open(src).convert("RGB")
W, H = 1200, 630
w, h = im.size
scale = max(W / w, H / h)
im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
w, h = im.size
im = im.crop(((w - W) // 2, (h - H) // 2, (w + W) // 2, (h + H) // 2))

# затемнение снизу градиентом
grad = Image.new("L", (1, H), 0)
for y in range(H):
    grad.putpixel((0, y), int(210 * max(0, (y - H * 0.35) / (H * 0.65)) ** 1.5))
grad = grad.resize((W, H))
dark = Image.new("RGB", (W, H), (18, 30, 24))
im = Image.composite(dark, im, grad)

import matplotlib
fd = os.path.join(os.path.dirname(matplotlib.__file__), "mpl-data", "fonts", "ttf")
serif = ImageFont.truetype(os.path.join(fd, "DejaVuSerif.ttf"), 64)
sans = ImageFont.truetype(os.path.join(fd, "DejaVuSans.ttf"), 30)
sans_b = ImageFont.truetype(os.path.join(fd, "DejaVuSans-Bold.ttf"), 34)

d = ImageDraw.Draw(im)
x = 64
d.text((x, 370), "Квартиры от хозяйки", font=serif, fill=(255, 254, 250))
d.text((x, 452), "посуточно в Пестово · от 2 000 ₽/сутки", font=sans, fill=(220, 224, 216))
d.text((x, 540), "+7 921 705-88-76 · без посредников и комиссии", font=sans_b, fill=(255, 254, 250))

out = os.path.join(ROOT, "public", "og.jpg")
im.save(out, "JPEG", quality=85, optimize=True)
print(f"og -> {out} ({os.path.getsize(out)/1e3:.0f} КБ)")
