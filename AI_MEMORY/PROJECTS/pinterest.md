# pinterest — пайплайн пинов + сайт-витрина

Пути: `C:\Users\stepa\pinterest-pins` (пины, CSV), сайт — Next.js на Vercel (аккаунт ilovezgg, прод https://pinterest-pins-ten.vercel.app — НЕ путать с чужим pinterest-pins.vercel.app). Детали: `claude-migration/projects/pinterest.md`. Скилл `pinterest-csv-batch` — правила CSV/расписаний.

## Что сделано
~600+ пинов, загрузки по расписанию (10 слотов/день МСК). GSC/Bing/IndexNow подключены (подтвердить руками). Техническое SEO: sitemap, robots, canonical, OG, JSON-LD, 300 пин-страниц noindex.

## План SEO (bubbly-stargazing-galaxy, не исполнен)
kw-research.py (Google Suggest без ключа) → 10 статей 1200–2000 слов в content/articles/*.json (Hanukkah/Thanksgiving/Christmas декор, Mediterranean-интерьеры, moody dark kitchen) → расширить 3 старые до 1000+ слов → интро у досок ≥6 пинов → IndexNow → PageSpeed mobile.

## Открытое
- **Купить домен (приоритет, ~$10/год)** — vercel.app слаб для долгоживущего сайта.
- Нажать «Подтвердить» p:domain_verify.
- Загрузки: Hanukkah 501–560 (51/60), Thanksgiving 641–740 (01–07.11, расписание готово).
- На диске рядом с проектом лежат CSV: 9–15-upload-*.csv (upload-ready, thanks-w1..w4).

## Правила
CSV: titles/descriptions, доски, нумерация изображений, расписание ≤100 запланированных пинов.

## Команды пользователя
- **«делай ксв»** = собрать upload-ready CSV-пачку для Pinterest по скиллу `pinterest-csv-batch`: тайтлы + описания пинов, доски, нумерация картинок, слоты расписания, проверка лимита 100 запланированных пинов. Без лишних вопросов — взять готовые изображения/номера из контекста или последних CSV (9–15-upload-*.csv рядом с проектом), назвать файл по дате и волне (число-название-спасибо-wN.csv).
