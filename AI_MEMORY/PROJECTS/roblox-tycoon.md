# roblox-tycoon — Halloween Pumpkin Tycoon

Путь: `C:\Users\stepa\Desktop\Projects\roblox-tycoon`. TASKS.md в папке. Детали: `claude-migration/projects/roblox-tycoon.md`.

## Что это
Roblox-игра: яйца → питомцы → доход. Этап 1 готов 13.10.

## Технические уроки (CONFIRMED, memory проекта)
- **Studio-http-sync**: `python -m http.server 8765` + Roblox HttpService для синка данных извне (HttpEnabled=false в проде).
- **Studio ставит паузы на обработанных ошибках** — обработанная pcall-ошибка ≠ баг; при отладке не путать.
- Цель — 30+ FPS на телефоне пользователя (perf-target-device).
- HTTP sync в Studio: паузы на handled errors при длительном polling.

## Следующее
Публикация из Studio; тест рекламой ~$50 (конверсия, ДРР).
