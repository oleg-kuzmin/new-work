# [`settings.json`](./index.md)

file:///Users/Oleg/AppData/Roaming/Code/User/settings.json

```json
{
  // снипеты в подсказках emmet
  "editor.snippetSuggestions": "inline",

  // Кастомная настройка цветов
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          "support.type.primitive.ts",
          "support.type.primitive.tsx",
          "support.type.builtin.ts",
          "entity.name.type",
          "entity.name.type.module.tsx"
        ],
        "settings": {
          "foreground": "#4EC9B0"
        }
      }
    ]
  },

  // перенос текста по словам
  "editor.wordWrap": "on",

  // перескакивание на файл в проводнике при открытии файла
  "explorer.autoReveal": false,

  // сжатие в одну строчку папок в проводнике
  "explorer.compactFolders": false,

  // подтверждение удаления файла в корзину
  "explorer.confirmDelete": false,

  // подтверждение переноса папки
  "explorer.confirmDragAndDrop": false,

  // подтверждение вставки файлов
  "explorer.confirmPasteNative": false,

  // удаление лишних пробелов при сохранении
  "files.trimTrailingWhitespace": false,

  // переодическое использование git fetch
  "git.autofetch": false,

  // никогда не открывать репозиторий
  "git.openRepositoryInParentFolders": "never",

  // обновление импортов при переименовании/перемещении файла
  "javascript.updateImportsOnFileMove.enabled": "never",

  // отключает всплывающее окно (Live Server)
  "liveServer.settings.donotShowInfoMsg": true,

  // двойной клик мышкой для открытия редактора (Markdown Preview Github Styling)
  "markdown.preview.doubleClickToSwitchToEditor": false,

  // отключает вертикальную полоску при наведении (Markdown Preview Github Styling)
  "markdown.preview.markEditorSelection": false,

  // цветовая тема по умолчанию для Markdown (Markdown Preview Github Styling)
  "markdown-preview-github-styles.colorTheme": "dark",

  // стиль темной темы по умолчанию Markdown (Markdown Preview Github Styling)
  "markdown-preview-github-styles.darkTheme": "dark_dimmed",

  // стиль иконок (Material Icon Theme)
  "material-icon-theme.activeIconPack": "react_redux",

  // настройка иконок папок (Material Icon Theme)
  "material-icon-theme.folders.associations": {
    "git": "github",
    "gitbash": "vm",
    "packages": "webpack",
    "vite": "config",
    "terminal": "desktop",
    "redux": "redux-actions"
  },

  // скрытие стрелок возле папок в проводнике (Material Icon Theme)
  "material-icon-theme.hidesExplorerArrows": true,

  // скобки вокруг единственного параметра стрелочной функции (Prettier)
  "prettier.arrowParens": "avoid",

  // помещает > в конец строки или на следующую строку
  "prettier.bracketSameLine": false,

  // пробелы в объектах между скобками (Prettier)
  "prettier.bracketSpacing": true,

  // всегда точка с запятой (Prettier)
  "prettier.semi": true,

  // двойные кавычки в jsx (Prettier)
  "prettier.jsxSingleQuote": false,

  // максимальная ширина кода (Prettier)
  "prettier.printWidth": 120,

  // требует файл конфига для форматирования (Prettier)
  "prettier.requireConfig": false,

  // одиночные кавычки (Prettier)
  "prettier.singleQuote": true,

  // отключает волнистую подсветку пустых scss
  "scss.lint.emptyRules": "ignore",

  // открытие недоверенных файлов в доверенной области
  "security.workspace.trust.untrustedFiles": "open",

  // использование Git Bash по умолчанию
  "terminal.integrated.defaultProfile.windows": "Git Bash",

  // восстановление сеанса терминала после закрытия
  "terminal.integrated.enablePersistentSessions": false,

  // размер шрифта терминала
  "terminal.integrated.fontSize": 16,

  // восстановление сеанса терминала после закрытия
  "terminal.integrated.persistentSessionReviveProcess": "never",

  // отключает точки рядом с командой терминала
  "terminal.integrated.shellIntegration.decorationsEnabled": "never",

  // отключает shell-терминал для ускорения Git Bash
  "terminal.integrated.shellIntegration.enabled": false,

  // на какой язык переводить (Vscode Google Translate)
  "vscodeGoogleTranslate.preferredLanguage": "Russian",

  // не сохранять рабочую область при закрытии
  "window.confirmSaveUntitledWorkspace": false,

  // высота вкладок
  "window.density.editorTabHeight": "default",

  // запрет открытия файлов в новом окне
  "window.openFilesInNewWindow": "off",

  // увеличение интерфейса в окне
  "window.zoomLevel": 0.2,

  // настройка цветовой темы Kimbie Dark
  "workbench.colorCustomizations": {
    "[One Dark Pro]": {
      "editorGutter.modifiedBackground": "#0000", // цвет вертикальной полоски измененных файлов git
      "editorGutter.addedBackground": "#0000", // цвет вертикальной полоски измененных файлов git
      "editorGutter.deletedBackground": "#0000" // цвет вертикальной полоски измененных файлов git
    }
  },

  // отключает сохранение разделения экрана при закрытии вкладки
  "workbench.editor.closeEmptyGroups": true,

  // автоматическое закрытии редактора при удалении файла
  "workbench.editor.closeOnFileDelete": true,

  // предварительный просмотр файлов
  "workbench.editor.enablePreview": true,

  // что отображается на вкладках
  "workbench.editor.labelFormat": "default",

  // восстанавливает положение прокрутки при открытии редактора
  "workbench.editor.restoreViewState": false,

  // отображение вкладок
  "workbench.editor.showTabs": "multiple",

  // размер вкладок
  "workbench.editor.tabSizing": "fixed",

  // перенос вкладок при переполнении на другую строку
  "workbench.editor.wrapTabs": true,

  // открытие файлов markdown по умолчанию
  "workbench.editorAssociations": {
    "*.md": "default"
  },

  // иконки папок в проводнике по умолчанию
  "workbench.iconTheme": "material-icon-theme",

  // иконки интерфейса проводника по умолчанию
  "workbench.productIconTheme": "material-product-icons",

  // прилипание верхней строчки проводника
  "workbench.tree.enableStickyScroll": false,

  // отступ в проводнике в пикселях
  "workbench.tree.indent": 12,

  // вертикальные линии в проводнике
  "workbench.tree.renderIndentGuides": "none",

  // Игнорирование предупреждения unknown at rule
  "css.lint.unknownAtRules": "ignore",

  // Игнорирование предупреждения unknown at rule
  "scss.lint.unknownAtRules": "ignore",

  //# Подсказки
  // cсылка на MDN при наведении
  "css.hover.references": false,

  // подсказки при наведении в редакторе
  // "editor.hover.enabled": false,

  // подсказки в виде желтых лампочек
  "editor.lightbulb.enabled": "off",

  // всплывающее окно с подсказками по мере ввода
  "editor.parameterHints.enabled": false,

  // подсказки частых слов в emmet
  "editor.suggest.showWords": false,

  // ссылка на MDN при наведении
  "html.hover.references": false,

  // ссылка на MDN при наведении
  "scss.hover.references": false
}
```
