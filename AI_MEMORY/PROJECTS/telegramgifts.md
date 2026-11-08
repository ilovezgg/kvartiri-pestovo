# telegramgifts — бот флипа TG-подарков (MRKT)

Путь: `C:\Users\stepa\Desktop\telegramgifts` (ПК, остановлен 29.10) · ноут Solus: `~/telegramgifts` (живой, systemd giftbot).
Детали: `claude-migration/projects/telegramgifts.md`, `Desktop\CLAUDE_ноут.txt` (полный справочник), TASKS.md в папке проекта.

## Что это
Сканер-советник рынка MRKT (api.tgmrkt.io): Telethon-сессия → initData → токен MRKT; опрашивает ленту (листинги/change_price/продажи), фильтрует фишки (⚫ Onyx/Black, 🎨 моно, 🔢 номер, 💥 комбо), шлёт алерт в ЛС @easygiftseasymoney_bot с кнопкой «Купить», пишет data/*.jsonl. Цены в TON (в коде «GRAM»).

## Архитектура
bot/: scanner.py (главный цикл), control.py (пульт в ТГ), mrkt.py (клиент, белый список методов, анти-бан MIN_GAP, mrkt_guard.json), alert.py, beauty.py, mono.py, value.py (оценщик fair, --build раз в неделю), paper.py/paper_report.py (бумажный автобай), orderbook.py, others.py (Portals), login.py/login_qr.py, secure.py (DPAPI/файлы 600). Тесты: `python -m unittest discover -s tests`.

## Железные правила (DECISIONS пп. 10–17)
Только MRKT; только gifts/buy по кнопке; автобай — только после отдельного «да» пользователя; бумажный автобай правило M = mono_whitelist.json (21 комбо, флор…флор+2%); 1 машина из 2 (никогда параллельно).

## Настройки (29.10)
max_price 10, liq_alert 350 (200 для коллекций с медианой ≥5), watch {Liberty Figure: 6, Witch Hat: 10}, sell_fee 2, NEAR_FLOOR 1.07 (оникс 1.5).

## Открытое (на 29.10–03.11)
- ~2–3.11: отчёт paper_report.py → решение о реальном автобае (только его «да»).
- Калибровка mono.py по mono_labels.json; правило A/B переключить на ликвидность по МОДЕЛИ (≥24 продаж/сут).
- Баг портфеля: проданные числятся. Дубль Chill Flame #256300 в trades.jsonl — спросить какой реальный.
- Evil Eye #15678 прошёл бы фильтры, бот молчал — добавить debug-лог причин отказа в _gate().
- Висят 3 лота: Ramen Ratatouille/Gunmetal 4.08, Lunar Snake Glowbra/Midnight Blue 4.019, Vice Cream Cherry/Gunmetal 4.049 (ориентиры 4.25–4.3 / 4.1).
- Шаг 2 оценщика: алерты по edge = fair/1.02×(1−fee) − ask — ждёт «да».
- Лаг paper.jsonl/sent.json — проверить, что ушёл.
- Watchdog/автозапуск — в планах.

## Операционка ноута (Solus)
`systemctl --user status/restart giftbot`; лог `tail -f ~/telegramgifts/data/scanner.log`; перелогин — ТОЛЬКО QR: `cd ~/telegramgifts/bot && ../.venv/bin/python login_qr.py` (службу сначала stop). Крышка закрыта = ноут спит = бот мёртв (питание: «ничего не делать», зарядка). CRLF с ПК ломает sed.
ПК: включение «ВКЛЮЧИТЬ бота.bat», автозапуск задачи планировщика Disabled (вернуть Enable-ScheduledTask).
