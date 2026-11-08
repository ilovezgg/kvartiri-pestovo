# gift-stats — дашборд портфеля TG-подарков

Путь: `C:\Users\stepa\Desktop\Projects\Web\gift-stats`. Детали: `claude-migration/projects/gift-stats.md`.

## Что это
Сайт портфеля: Python stdlib-сервер 127.0.0.1:8765 + TG Mini App 8766; читает данные бота (sales.jsonl, listings.jsonl, markets_floors.jsonl), MRKT API не дёргает. Vanilla JS, единый style.css.

## Сделано (по планам)
- Инкрементальные индексы SalesIndex/BookIndex (байтовые смещения, lock).
- `GET /api/model?c=&m=&id=` — статистика модели за 24 ч, стакан, fair/conf через valuer(), ранг «N-й из M», кэш 30 с.
- Автодетект продажи (sold_hint, t > t_buy + 120 с), баннер «Похоже, продан».
- Вкладка «Рынок» (hash #market), премиум-слой (шампань-золото --gold #d8b878, serif, голографическая фольга, P&L-график, odometer) — см. план snuggly-baking-ripple.
- Плагин chuvak тянет /api/mine + /api/model (вкладка «подарки»).

## Открытое (29.10–03.11)
- Покупка с сайта вживую; глазами фольга/конфетти/768–1024px.
- /api/og?l=constructor отдаёт 500; POST /api/similar без auth.
- Сверка hard vs totalHard; кнопка меню бота.
- На ноут не переносился (control.SITE_JSON на ПК).

## Деплой/запуск
Задача планировщика \gift-stats-site (Disabled на 29.10, как и бот). На ПК сайт живёт вместе с ботом.
