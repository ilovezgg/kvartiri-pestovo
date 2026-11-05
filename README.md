# rent-next — лендинг квартир посуточно (Next 16, App Router)

## Запуск
```
npm run dev      # разработка, http://localhost:3000
npm run build && npm run start
node scripts/shots.mjs   # скрины через system Chrome (puppeteer-core), сервер должен работать
```

## Структура
- `app/layout.tsx` — шрифт Onest (next/font), metadata, lang=ru
- `app/page.tsx` — сборка секций
- `app/globals.css` — все стили и токены (порт из HTML-макета `..\rent-landing\index.html`)
- `lib/data.ts` — ВЕСЬ контент одним файлом: имя/город/телефон/квартиры/цены/отзывы/FAQ/реквизиты
- `components/*` — Header (sticky+тень по скроллу), Hero, Trust, Flats, Steps, About, Lists, Reviews, Faq, FinalCta, Footer, CallBar (мобильная полоса звонка), Reveal (scroll-reveal)

## Анимации
- Scroll-reveal: `<Reveal delay={ms}>` вокруг блоков/карточек; контент виден и без JS (армирование через body.reveal-arm).
- Hero-вход стагером (CSS), Ken Burns на фото-заглушке hero.
- Hover: карточки поднимаются, фото-зум, кнопки с тенью, подсветка шагов брони.
- Всё отключается при prefers-reduced-motion.

## Конверсия: только телефон
Все CTA — `tel:` (data.ts: PHONE / PHONE_HREF). Форм нет намеренно.

## Что заменить перед публикацией
Всё в `lib/data.ts` + фото-заглушки `.ph` → `<img>` (инструкция в `..\rent-landing\README.md`).
