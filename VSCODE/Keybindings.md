# Keybindings

Для удаления можно просто вставить пустой массив вместо того, что есть в файле.

file:///Users/Oleg/AppData/Roaming/Code/User/keybindings.json

```json
// C:/Users/Oleg/AppData/Roaming/Code/User/keybindings.json
[
  {
    // Удаление - Закомментировать или раскомментировать блок
    "key": "shift+alt+a",
    "command": "-editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    // Добавление - Закомментировать или раскомментировать блок
    "key": "ctrl+numpad_multiply",
    "command": "editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    // Удаление - Закомментировать или раскомментировать строку
    "key": "ctrl+/",
    "command": "-editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    // Добавление - Закомментировать или раскомментировать строку
    "key": "ctrl+numpad_divide",
    "command": "editor.action.commentLine",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    // Удаление - Закрытие окна
    "key": "ctrl+shift+w",
    "command": "-workbench.action.closeWindow"
  },
  {
    // Добавление - Свернуть папки в проводнике
    "key": "ctrl+shift+w",
    "command": "workbench.files.action.collapseExplorerFolders"
  },
  {
    // Удаление - Открытие нового окна
    "key": "ctrl+shift+n",
    "command": "-workbench.action.newWindow"
  },
  {
    // Добавление - Файл: создать папку
    "key": "ctrl+shift+n",
    "command": "explorer.newFolder"
  },
  {
    // Удаление - Файл: создать пустой файл
    "key": "ctrl+n",
    "command": "-workbench.action.files.newUntitledFile"
  },
  {
    // Добавление - Файл: создать файл
    "key": "ctrl+n",
    "command": "explorer.newFile"
  },
  {
    // Удаление - Форматировать документ
    "key": "shift+alt+f",
    "command": "-editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    // Добавление - Форматировать документ
    "key": "ctrl+s",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    // Удаление - Live Server: Open with Live Server
    "key": "alt+l alt+o",
    "command": "-extension.liveServer.goOnline",
    "when": "editorTextFocus"
  },
  {
    // Добавление - Live Server: Open with Live Server
    "key": "ctrl+numpad1",
    "command": "extension.liveServer.goOnline",
    "when": "editorTextFocus"
  },
  {
    // Удаление - Live Server: Stop Live Server
    "key": "alt+l alt+c",
    "command": "-extension.liveServer.goOffline",
    "when": "editorTextFocus"
  },
  {
    // Добавление - Live Server: Stop Live Server
    "key": "ctrl+numpad2",
    "command": "extension.liveServer.goOffline",
    "when": "editorTextFocus"
  },
  {
    // Добавление - Emmet: Перенести с сокращением
    "key": "ctrl+numpad3",
    "command": "editor.emmet.action.wrapWithAbbreviation"
  },
  {
    // Удаление - Quokka.js: Start on Current File
    "key": "ctrl+k q",
    "command": "-quokka.makeQuokkaFromExistingFile",
    "when": "!quokka.isLiveShareClient && !terminalFocus"
  },
  {
    // Добавление - Quokka.js: Start on Current File
    "key": "ctrl+numpad4",
    "command": "quokka.makeQuokkaFromExistingFile",
    "when": "!quokka.isLiveShareClient && !terminalFocus"
  },
  {
    // Добавление - Quokka.js: Stop All
    "key": "ctrl+numpad5",
    "command": "quokka.stopAll"
  },
  {
    // Удаление - Translate selection(s) to preffered language
    "key": "shift+alt+t",
    "command": "-extension.translateTextPreferred",
    "when": "editorTextFocus"
  },
  {
    // Добавление - Translate selection(s) to preffered language
    "key": "ctrl+numpad6",
    "command": "extension.translateTextPreferred",
    "when": "editorTextFocus"
  },
  {
    // Добавление - eCSStractor Run
    "key": "ctrl+numpad7",
    "command": "extension.ecsstractor_port_run"
  },
  {
    // Добавление - eCSStractor Run (With BEM Nesting)
    "key": "ctrl+numpad8",
    "command": "extension.ecsstractor_port_runwithbem"
  },
  {
    // Добавление - Live Server: Change Live Server workSpace
    "key": "ctrl+numpad9",
    "command": "extension.liveServer.changeWorkspace"
  }
]
```
