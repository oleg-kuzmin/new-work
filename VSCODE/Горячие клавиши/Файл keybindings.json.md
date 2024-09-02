# [`Файл keybindings.json`](../index.md)

Для удаления можно просто вставить пустой массив вместо того, что есть в файле.

file:///Users/Oleg/AppData/Roaming/Code/User/keybindings.json

## Настройка

```json
[
  //# Ctrl + n
  {
    // Файл: создать файл (Удаление стандартного)
    "key": "ctrl+n",
    "command": "-workbench.action.files.newUntitledFile"
  },
  {
    // Файл: создать файл (Добавление своего)
    "key": "ctrl+n",
    "command": "explorer.newFile"
  },

  //# Ctrl + Shift + n
  {
    // Открытие нового окна (Удаление стандартного)
    "key": "ctrl+shift+n",
    "command": "-workbench.action.newWindow"
  },
  {
    // Файл: создать папку (Добавление своего)
    "key": "ctrl+shift+n",
    "command": "explorer.newFolder"
  },

  //# Ctrl + Shift + w
  {
    // Закрытие окна (Удаление стандартного)
    "key": "ctrl+shift+w",
    "command": "-workbench.action.closeWindow"
  },
  {
    // Свернуть папки в проводнике (Добавление своего)
    "key": "ctrl+shift+w",
    "command": "workbench.files.action.collapseExplorerFolders"
  },

  //# Ctrl + s
  {
    // Форматировать документ (Удаление стандартного)
    "key": "shift+alt+f",
    "command": "-editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    // Форматировать документ (Добавление своего)
    "key": "ctrl+s",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },

  //# Ctrl + / (numpad)
  {
    // Закомментировать или раскомментировать строку (Удаление стандартного)
    "key": "ctrl+/",
    "command": "-editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    // Закомментировать или раскомментировать строку (Добавление своего)
    "key": "ctrl+numpad_divide",
    "command": "editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },

  //# Ctrl + * (numpad)
  {
    // Закомментировать или раскомментировать блок (Удаление стандартного)
    "key": "shift+alt+a",
    "command": "-editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    // Закомментировать или раскомментировать блок (Добавление своего)
    "key": "ctrl+numpad_multiply",
    "command": "editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },

  //# Ctrl + 1 (numpad)
  {
    // Live Server: Open with Live Server (Удаление стандартного)
    "key": "alt+l alt+o",
    "command": "-extension.liveServer.goOnline",
    "when": "editorTextFocus"
  },
  {
    // Live Server: Open with Live Server (Добавление своего)
    "key": "ctrl+numpad1",
    "command": "extension.liveServer.goOnline",
    "when": "editorTextFocus"
  },

  //# Ctrl + 2 (numpad)
  {
    // Live Server: Stop Live Server (Удаление стандартного)
    "key": "alt+l alt+c",
    "command": "-extension.liveServer.goOffline",
    "when": "editorTextFocus"
  },
  {
    // Live Server: Stop Live Server (Добавление своего)
    "key": "ctrl+numpad2",
    "command": "extension.liveServer.goOffline",
    "when": "editorTextFocus"
  },

  //# Ctrl + 3 (numpad)
  {
    // Emmet: Перенести с сокращением (Добавление своего)
    "key": "ctrl+numpad3",
    "command": "editor.emmet.action.wrapWithAbbreviation"
  },

  //# Ctrl + 4 (numpad)
  {
    // Quokka.js: Start on Current File (Удаление стандартного)
    "key": "ctrl+k q",
    "command": "-quokka.makeQuokkaFromExistingFile",
    "when": "!quokka.isLiveShareClient && !terminalFocus"
  },
  {
    // Quokka.js: Start on Current File (Добавление своего)
    "key": "ctrl+numpad4",
    "command": "quokka.makeQuokkaFromExistingFile",
    "when": "!quokka.isLiveShareClient && !terminalFocus"
  },

  //# Ctrl + 5 (numpad)
  {
    // Quokka.js: Stop All (Добавление своего)
    "key": "ctrl+numpad5",
    "command": "quokka.stopAll"
  },

  //# Ctrl + 6 (numpad)
  {
    // Translate selection(s) to preffered language (Удаление стандартного)
    "key": "shift+alt+t",
    "command": "-extension.translateTextPreferred",
    "when": "editorTextFocus"
  },
  {
    // Translate selection(s) to preffered language (Добавление своего)
    "key": "ctrl+numpad6",
    "command": "extension.translateTextPreferred",
    "when": "editorTextFocus"
  },

  //# Ctrl + 7 (numpad)
  {
    // Команда eCSStractor Run (Добавление своего)
    "key": "ctrl+numpad7",
    "command": "extension.ecsstractor_port_run"
  },
  //# Ctrl + 8 (numpad)
  {
    // eCSStractor Run With BEM Nesting (Добавление своего)
    "key": "ctrl+numpad8",
    "command": "extension.ecsstractor_port_runwithbem"
  },
  //# Ctrl + 9 (numpad)
  {
    // Сортировка строк по возрастанию (Добавление своего)
    "key": "ctrl+numpad9",
    "command": "editor.action.sortLinesAscending"
  }
]
```
