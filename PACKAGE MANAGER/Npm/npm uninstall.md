# `npm uninstall`

Не важно, где располагается информация о пакете - в секции dependencies или devDependencies, пакет удаляется из любой из этих секций.

Также возможно не вводить команды в терминале, а напрямую удалить строку из файла package.json и запустить `npm i` или `npm install`. Пакеты также будут удалены.

```bash
# удаление пакета
npm uninstall express

# удаление пакета глобально
npm uninstall -g express
```