# Settings

file:///Users/Oleg/AppData/Roaming/Code/User/settings.json

```json
{
  // настройка (Better Comments)
  "better-comments.tags": [
    {
      "tag": "#",
      "color": "#e3d50e",
      "strikethrough": false,
      "underline": true,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "!",
      "color": "#FF2D00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "?",
      "color": "#3498DB",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "//",
      "color": "#474747",
      "strikethrough": true,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "todo",
      "color": "#FF8C00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "*",
      "color": "#87d49d", // "#87d49d" || "#98C379"
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    }
  ],

  // выключает хлебные крошки
  "breadcrumbs.enabled": false,

  // отображает путь к файлу в навигации хлебных крошек
  "breadcrumbs.filePath": "on",

  // показывает классы в навигации хлебных крошек
  "breadcrumbs.showClasses": false,

  // отключает значки в навигации хлебных крошек
  "breadcrumbs.symbolPath": "off",

  // отключает волнистую подсветку пустых css
  "css.lint.emptyRules": "ignore",

  // стиль курсора
  "editor.cursorStyle": "line",

  // форматировщик по умолчанию
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // форматировщик для файлов .code-snippets
  "[snippets]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },

  // шрифт редактора
  "editor.fontFamily": "Consolas",

  // размер шрифта редактора
  "editor.fontSize": 18,

  // автоформатирование при сохранении
  "editor.formatOnSave": false,

  // точки остановки слева для отладки
  "editor.glyphMargin": true,

  // переход к определению
  "editor.gotoLocation.multipleDefinitions": "goto",

  // вертикальные направляющие линии от скобок тем же цветом, что и скобки
  "editor.guides.bracketPairs": false,

  // вертикальные линии отступов
  "editor.guides.indentation": true,

  // метка положения внутри вертикального скролбара
  "editor.hideCursorInOverviewRuler": true,

  // пробелы при табуляции
  "editor.insertSpaces": true,

  // автоматическое переименование открывающего и закрывающего тегов
  "editor.linkedEditing": true,

  // дополнительное выделение скобок
  "editor.matchBrackets": "never",

  // мини-карта
  "editor.minimap.enabled": false,

  // скорость прокрутки мыши
  "editor.mouseWheelScrollSensitivity": 2,

  // изменение масштаба интерфейса при скроле колесиком
  "editor.mouseWheelZoom": false,

  // подсветка слов
  "editor.occurrencesHighlight": "off",

  // граница ползунка вертикального скроллбара
  "editor.overviewRulerBorder": true,

  // горизонтальная линия текущей строки
  "editor.renderLineHighlight": "none",

  // ползунок вертикального скроллбара
  "editor.scrollbar.vertical": "visible",

  // размер вертикального скроллбара
  "editor.scrollbar.verticalScrollbarSize": 12,

  // перечеркивание устаревших переменных, в том числе name
  "editor.showDeprecated": false,

  // плавный скролл
  "editor.smoothScrolling": true,

  // снипеты в подсказках emmet
  "editor.snippetSuggestions": "inline",

  // прилипание верхней строчки объявления функции
  "editor.stickyScroll.enabled": false,

  // размер табуляции
  "editor.tabSize": 2,

  // кастомная настройка цветов
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": ["support.type"],
        "settings": {
          "foreground": "#fc9937" // "#fc9937" || "#7fc793"
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

  // автоматическое сохранение файлов
  "files.autoSave": "afterDelay",

  // удаление лишних пробелов при сохранении
  "files.trimTrailingWhitespace": false,

  // переодическое использование git fetch
  "git.autofetch": false,

  // подтверждение синхронизации c github
  "git.confirmSync": false,

  // добавление файлов в stage при коммите
  "git.enableSmartCommit": true,

  // никогда не открывать репозиторий
  "git.openRepositoryInParentFolders": "never",

  // обновление импортов при переименовании/перемещении файла
  "javascript.updateImportsOnFileMove.enabled": "never",

  // настройка (Live Sass Compiler)
  // "liveSassCompile.settings.formats": [
  //   {
  //     "format": "expanded",
  //     "extensionName": ".css",
  //     "savePath": "~/../css",
  //     "savePathReplacementPairs": null
  //   },
  //   {
  //     "format": "compressed",
  //     "extensionName": ".min.css",
  //     "savePath": "~/../css",
  //     "savePathReplacementPairs": null
  //   }
  // ],

  // отключает постоянное открытие терминала (Live Sass Compiler)
  // "liveSassCompile.settings.showOutputWindowOn": "None",

  // отключает всплывающее окно (Live Server)
  "liveServer.settings.donotShowInfoMsg": true,

  // двойной клик мышкой для открытия редактора (Markdown Preview Github Styling)
  "markdown.preview.doubleClickToSwitchToEditor": true,

  // отключает вертикальную полоску при наведении (Markdown Preview Github Styling)
  "markdown.preview.markEditorSelection": false,

  // цветовая тема по умолчанию для Markdown (Preview Github Styling)
  "markdown-preview-github-styles.colorTheme": "dark",

  // стиль темной темы по умолчанию Markdown (Preview Github Styling)
  "markdown-preview-github-styles.darkTheme": "dark_dimmed",

  // стиль иконок (Material Icon Theme)
  "material-icon-theme.activeIconPack": "react_redux",

  // настройка иконок файлов (Material Icon Theme)
  "material-icon-theme.files.associations": {
    "html.md": "html",
    "css.md": "css",
    "js.md": "javascript",
    "terminal.md": "powershell"
  },

  // настройка иконок папок (Material Icon Theme)
  "material-icon-theme.folders.associations": {
    "git": "github",
    "gitbash": "vm",
    "packages": "webpack",
    "vite": "config",
    "terminal": "desktop"
  },

  // скрытие стрелок возле папок в проводнике (Material Icon Theme)
  "material-icon-theme.hidesExplorerArrows": true,

  // скобки вокруг единственного параметра стрелочной функции (Prettier)
  "prettier.arrowParens": "avoid",

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
    "[Kimbie Dark]": {
      // "editorIndentGuide.activeBackground1": "#681214", // цвет активной вертикальной линии редактора
      // "editorIndentGuide.background1": "#681214", // цвет вертикальной линии редактора
      // "gitDecoration.ignoredResourceForeground": "#cccccc", // цвет игнорируемых файлов git
      "tab.activeBackground": "#5e4416", // цвет вкладки файла
      "tab.activeBorder": "#cc8d21", // граница вкладки файла
      "editorGutter.modifiedBackground": "#0000", // цвет вертикальной полоски измененных файлов git
      "editorGutter.addedBackground": "#0000", // цвет вертикальной полоски измененных файлов git
      "editorGutter.deletedBackground": "#0000" // цвет вертикальной полоски измененных файлов git
    }
  },

  // цветовая тема по умолчанию
  "workbench.colorTheme": "Kimbie Dark",

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
    "*.md": "default" // "vscode.markdown.preview.editor" || "default"
  },

  // иконки папок в проводнике по умолчанию
  "workbench.iconTheme": "material-icon-theme",

  // иконки интерфейса проводника по умолчанию
  "workbench.productIconTheme": "material-product-icons",

  // что будет отображаться при запуске
  "workbench.startupEditor": "none",

  // прилипание верхней строчки проводника
  "workbench.tree.enableStickyScroll": false,

  // отступ в проводнике в пикселях
  "workbench.tree.indent": 12,

  // вертикальные линии в проводнике
  "workbench.tree.renderIndentGuides": "none",

  //# Подсказки
  // cсылка на MDN при наведении
  "css.hover.references": false,

  // подсказки при наведении в редакторе
  "editor.hover.enabled": false,

  // подсказки в виде желтых лампочек
  "editor.lightbulb.enabled": "off",

  // всплывающее окно с документацией по мере ввода
  "editor.parameterHints.enabled": false,

  // подсказки частых слов в emmet
  "editor.suggest.showWords": false,

  // ссылка на MDN при наведении
  "html.hover.references": false,

  // ссылка на MDN при наведении
  "scss.hover.references": false
}
```
