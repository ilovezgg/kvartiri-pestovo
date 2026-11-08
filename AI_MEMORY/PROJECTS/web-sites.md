# web-sites — лендинги для себя и лидген-клиентов

Детали по каждому: `claude-migration/projects/web-sites-index.md` (30 KB, главный документ), плюс отдельные md: ispan-electric, barbershop, art-garage, atrium-site, parastroy, pinewick-next, ParaWebDesign. TASKS.md/CLAUDE.md — в папках проектов (`Desktop\Projects\Web\*`, `Desktop\modul\`).

## Ключевые факты
- **ispan-electric** (+admin): лендинг электрика-фрилансера, Марбелья. React+Vite+TS, CSS Modules (не Tailwind), i18n es/en/ru (es основной; новый текст — ключ во все 3 локали в src/i18n/translations.ts). Тёплая светлая палитра: surface #f2f1ef, ink #111214, акцент медь --color-copper. Брейкпоинты 640/900/1280, общий .container.
- **barbershop**: живой мобильный Hero (★4.9 Яндекс Карты, scroll-snap карусель, blur-блики, bouncing стрелка, 100svh) — одобрен 15.09, НЕ перезаписывать без явного согласия.
- **art-garage**: сайт компании из Telegram-экспорта чата (28.10): Hero/Cases/Lead…
- **pinewick-next**: первый экран по скрину пользователя, Next.js.
- parastroy / kontur-studio / northbound-v3 / ParaWebDesign / modul — разные стадии, см. индекс.
- КП-шаблоны: `Desktop\пестово_КП` (сессии 23–24.09) — ребрендинг HTML-шаблонов в КП.

## Общие правила для всех сайтов
Дизайн-вкус и responsive-чеклист — `GLOBAL_MEMORY.md` §5. Конверсия — по телефону, формы не пихать без необходимости. TASKS.md в корне каждого проекта.
