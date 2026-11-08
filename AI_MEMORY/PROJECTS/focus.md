# focus — трекер задач «Фокус» (Tauri 2)

Путь: `C:\Users\stepa\Desktop\Projects\focus`. TASKS.md в папке. План: `~/.claude/plans/sorted-swimming-nova.md`. Детали: `claude-migration/projects/focus.md`.

## Задумка
Свой exe-трекер с автозапуском: задача + цель + срок (1…48 ч) + слайдер выполнения. Исходы: <50% — красный экран «ТЫ ЕБАНОЕ ЧМО», 50–99% — «почти смог», 100% — праздник + конфетти. Главное требование — ОЧЕНЬ красиво; красота — отдельный этап, не урезать.

## Решения пользователя (зафиксированы)
Название «Фокус», только русский, локальный JSON; не нажал «старт» до полуночи = провал; экран позора — при запуске (если не видел) и в момент провала; задачи только «сегодня» (многодневные висят); окно справа внизу, крестик → трей, автозапуск, хоткея нет.

## Техника
Окружение проверено 19.10 (rustc 1.98.1, node 22.15.1, VS Build Tools 2019, WebView2 155 — ставить ничего не надо). Переиспользует glass-player (трей, TitleBar, стекло). Rust: store.rs (%APPDATA%\com.stepa.focus\data.json, атомарная запись), commands.rs, ticker.rs (поток раз в 15 с — WebView2 троттлит JS-таймеры), window.rs (право-низ по work_area, фолбэк WinAPI SPI_GETWORKAREA). Фронт: React 19 + Vite + TS, CSS Modules + tokens.css, motion, canvas-confetti, Onest + Unbounded (@fontsource-variable). Плагины autostart/single-instance/notification. Релиз — NSIS.

## Состояние
Rust готов 19.10 (каркас + логика, cargo test исходов). Дальше: функциональный UI → этап красоты → сборка.
