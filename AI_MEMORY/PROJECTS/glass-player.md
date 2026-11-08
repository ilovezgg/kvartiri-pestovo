# glass-player — десктопный аудиоплеер (Tauri 2)

Путь: `C:\Users\stepa\Desktop\Projects\glass-player`. CLAUDE.md + TASKS.md в папке. Детали: `claude-migration/projects/glass-player.md`. Активен 29.10.

## Что это
Десктопный аудиоплеер: Tauri 2 (Rust) + React. Стеклянный UI (GlassBloodPlayer/GlassPlayer в AppData — инсталлятор GlassPlayer-0.1.0-setup.exe на Desktop).

## Технические уроки (переиспользуются в focus и других Tauri-проектах)
- `_lib` суффикс при конфликтах crate/плагин; версии api = версии крейта.
- convertFileSrc для путей, не asset-URL.
- transparent body + фолбэк под Mica (Acrylic может лагать при перетаскивании).
- «Выход» в трее обязателен; трей + TitleBar паттерны.
