# Конвертация фото квартир в WebP: ширина max 1600, качество 82.
# Исходные JPG удаляются (остаются в истории git). og.jpg не трогаем.
import os
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
total_before = total_after = count = 0

for dirpath, _, files in os.walk(ROOT):
    for f in files:
        if not f.lower().endswith(".jpg"):
            continue
        p = os.path.join(dirpath, f)
        out = p[:-4] + ".webp"
        before = os.path.getsize(p)
        im = Image.open(p).convert("RGB")
        if im.width > 1600:
            im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
        im.save(out, "WEBP", quality=82)
        after = os.path.getsize(out)
        total_before += before
        total_after += after
        count += 1
        print(f"{f}: {before//1024}KB -> {after//1024}KB")
        os.remove(p)

print(f"\nИТОГО: {count} фото, {total_before/1048576:.1f}MB -> {total_after/1048576:.1f}MB")
