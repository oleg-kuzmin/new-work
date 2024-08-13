# [`nwm`](./index.md)

Утилита позволяет переключаться между версиями `Node.js`.

Для использования версии `Node.js` ее нужно предварительно скачать и установить через `nwm install`.

## Установка

https://github.com/coreybutler/nvm-windows/releases

## Команды

```bash
nwm                        # выводит список всех команд
nwm install 14             # скачает, установит и запустит последнюю 14 версию
nwm install 14.0.0         # скачает, установит и запустит конкретную версию
nwm ls                     # выведет все пакеты, алиасы и что запущено сейчас
nwm use 16                 # переключится на 16 версию
nwm use default            # переключится на алиас default
nwm current                # текущая версия
nwm ls-remote              # выведет список возможных версий для установки
nwm alias myalias 18       # созаст алиас myalias для версии 18
nwm unalias myalias        # удалит алиас
nwm install-latest-npm     # установит последнюю версию npm
nwm reinstall-packages 16  # переносит глобальные пакеты в нужную версию
nwm run 16 ./dist/index.js # запустит файл в окружении версии 16
nwm deactivate             # полностью деактивирует nwm (повторный запуск - nwm use)
```
