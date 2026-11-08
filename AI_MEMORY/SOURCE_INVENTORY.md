# SOURCE_INVENTORY — откуда восстановлена память (первоисточники)

Всё перечисленное — только для чтения. Оригиналы не изменять.

## 1. Claude Code (основной источник)

| Что | Где |
|---|---|
| Глобальные инструкции | `C:\Users\stepa\.claude\CLAUDE.md` (10.8 KB, обновлён 28.10) |
| История запросов | `C:\Users\stepa\.claude\history.jsonl` (4067 строк, 18.04–30.10.2026) |
| Память по проектам | `C:\Users\stepa\.claude\projects\<путь-проекта>\memory\*.md` (16 проектов с MEMORY.md, 51 файл обратной связи) |
| Планы (plan-режим) | `C:\Users\stepa\.claude\plans\*.md` (9 файлов, расшифровка — `claude-migration/raw/plans-summary.md`) |
| Кастомные агенты | `C:\Users\stepa\.claude\agents\*.md` (10 агентов) |
| Скиллы | `C:\Users\stepa\.claude\skills\` (agent-reach, gepeto, pinokio, synced) |
| Настройки | `C:\Users\stepa\.claude\settings.json`, `claude_tips.txt` |
| Плагин chuvak | `C:\Users\stepa\.claude\my-mods\chuvak\` (+ dev-копия в `dev-mods/`) |
| Памятка для ноута | `C:\Users\stepa\Desktop\CLAUDE_ноут.txt` (полный справочник telegramgifts для Solus) |
| Бэкапы конфигов | `C:\Users\stepa\.claude\backup_cfg\`, `backups\` |

Сессии по проектам (history.jsonl, n = сообщений): telegramgifts 659, Downloads 151, Desktop 599, bybit-signals 622, roblox-tycoon 149, glass-player 39, Web 61, AspectWeapons 201+136, ispan-electric 91+36, barbershop 58, pinterest-pins 19, ScannerLove 32, lead-gen папки 76, free-claude-code 224.

## 2. Миграция в DeepSeek Harness (готовая переработка)

`C:\Users\stepa\Documents\deepseek-harness\default-workspace\claude-migration\` (8.5 MB, собран 30.10):
- `GLOBAL_CONTEXT.md` — стиль/правила · `memory/user-profile.md` — профиль и дизайн-вкус
- `PROJECTS_INDEX.md` — индекс проектов на 29–30.10 · `projects/*.md` — 24 детальных документа
- `DECISIONS.md` · `OPEN_TASKS.md` · `ERRORS_AND_LESSONS.md` · `TIMELINE.md`
- `MIGRATION_REPORT.md` — как мигрировали · `SOURCE_INVENTORY.md` — их инвентаризация
- `raw/plans-summary.md` — расшифровка 9 планов · `raw/session-digests/` — дайджесты сессий
- `archive/` — полные копии ~/.claude на момент миграции (агенты, планы, память, history.jsonl, chuvak)

## 3. Проектные TASKS.md / CLAUDE.md на диске (33 файла)

`Desktop\Projects\*` — см. список в индексе; ключевые: bybit-signals, rent-next, rent-landing, rent-site-research, yagames*, glass-player, focus, roblox-tycoon, Web\*. Актуальные открытые задачи — именно там.

## 4. Другие AI-инструменты

| Инструмент | Следы | Что извлечено |
|---|---|---|
| DeepSeek Harness | `Documents\deepseek-harness\` (workspace + default-workspace) | п.2; AGENTS.md workspace ссылается на claude-migration |
| Codex (OpenAI desktop) | `C:\Users\stepa\.codex\` (config.toml, logs_2.sqlite — активен 06–07.11, memories/ пуст) | сам факт использования; проектной памяти нет |
| OpenCode | `C:\Users\stepa\.config\opencode\` (opencode.jsonc — пустой конфиг), `%TEMP%\opencode\` — временные артефакты (скрины d2-*.html) | минимум; rent-next раньше тестировался через него (dev-лог %TEMP%\opencode\rent-dev.log) |
| Claude desktop | `AppData\Roaming\Claude Code\` (только ChromeNativeHost), `AppData\Local\Claude*\logs` | ничего содержательного |
| Kimi Work | `Documents\kimi\` (tasks, workspace) | ничего содержательного на 07.11 |

## 5. Секреты (факт наличия, без значений)

- `Desktop\telegramgifts\.env` — TG_BOT_TOKEN, TG_CHAT_ID, TG_API_ID, TG_API_HASH.
- `~/.claude/.credentials.json` — учётка Claude (не читать).
- На ноуте: `~/.local/share/telegramgifts/*.bin` — сессия Telegram + токен MRKT (права 600, без шифрования).
- `Desktop\Tools\.env` — нет ключей REDDIT/GITHUB/CF/DADATA (пользователь должен получить).
- MRKT-токен бота: защищён secure.py (Windows=DPAPI, Linux=файлы 600).
