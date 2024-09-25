# Современная структура директории компонента

```bash
src/components
├── ComponentName
│   ├── _modName
│   │   ├── ComponentName_modName.tsx — простой модификатор
│   │   └── ComponentName_modName_modVal.tsx — модификатор со значением
│   ├── ElementName
│   │   └── ComponentName-ElementName.tsx — элемент блока ComponentName
│   ├── ComponentName.i18n — файлы переводов
│   │   ├── ru.ts — словарь для русского языка
│   │   ├── en.ts — словарь для английского языка
│   │   └── index.ts — словарь используемых языков
│   ├── ComponentName.test — файлы тестов
│   │   ├── ComponentName.page-object.js — Page Object
│   │   ├── ComponentName.hermione.js — функциональный тест
│   │   └── ComponentName.test.tsx — unit-тест
│   ├── ComponentName.tsx — визуальное представление блока
│   ├── ComponentName.scss — визуальные стили
│   ├── ComponentName.examples.tsx — примеры компонента для Storybook
│   └── README.md — описание компонента
```
