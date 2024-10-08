# [`Настройка tsconfig.json`](../index.md)

Конфигурация TS.

```json
{
  "extends": {},
  "files": [],
  "compilerOptions": {},
  "include": [],
  "exclude": [].
}
```

## `"extends"`

Позволяет импортировать до применения настроек главного конфига другие конфиги. Например конфиг для dev и для prod сборок, где будут включаться/исключаться разные директории.

```json
"extends": "./tsconfig.json",
```

## `"files"`

Нужен для указания конкретных файлов для проверки. Возможно будет полезно для небольших проектов, но используется редко.

```json
{
  "files": ["src/01-basics/01-primitives.ts", "src/01-basics/02-primitives.ts"]
}
```

## `"include"`

Добавляет директории для отслеживания.

```json
{
  "include": ["src"]
}
```

## `"exclude"`

Исключает директории из отслеживания.

```json
{
  "exclude": ["node_modules", "src/**/*.stories.*", "src/**/mock/*"]
}
```

## `"compilerOptions"`

Различные настройки компилятора.

### `"sourceMap"`

Добавляет map файлы.

### `"watch"`

Включает режим отслеживания.

### `"target"`

Определяет во что будет преобразован ts.

```json
{
  "target": "ES3" // по умолчанию
}
```

### `"lib"`

Определяет дополнительные возможности библиотек. Например библиотека DOM позволяет использовать различные события, элементы и пр.

```json
{
  "lib": ["ES2015", "ES2016", "ES2017", "DOM"]
}
```

### `"outDir"`

Куда будут компилироваться файлы.

```json
{
  "outDir": "dist"
}
```

### `"isolatedModules"`

Изолирует файлы модулей друг от друга.

- `true` - включает опцию
- `false` - отключает

### `"esModuleInterop"`

Позволяет использовать современный синтаксис для импорта модулей `common.js` (которые с `require`).

- `true` - включает опцию
- `false` - отключает

### `"forceConsistentCasingInFileNames"`

Не дает возможность делать импорты из соседних файлов не учитывая регистр.

- `true` - включает опцию
- `false` - отключает

### `"module"`

Какую модульную систему будет использовать наше собранное приложение.

```json
{
  "module": "CommonJS"
}
```

### `"moduleResolution"`

Разрешение для модулей.

```json
{
  "moduleResolution": "node"
}
```

### `"outFile"`

Все приложение собирается в один файл.

```json
{
  "outFile": "index.js"
}
```

### `"allowSyntheticDefaultImports"`

Добавляет синтетические дефолтные импорты для тех библиотек, которые не имеют экспорта по умолчанию.

- `true` - включает опцию
- `false` - отключает

```ts
import * as LibName from 'libName'; // без опции
import LibName from 'libName'; // с опцией
```

### `"downlevelIteration"`

Понижает уровень синтаксиса на более старый для итераций.

### `"declaration"`

Нужна в том случае, если мы пишем свою библиотеку. Будет создавать файлы declaration с типами в автоматическом режиме.

- `true` - включает опцию
- `false (по умолчанию)` - отключает

### `"declarationDir"`

Определяет директорию, где будут лежать декларации.

```json
{
  "declarationDir": "declaration"
}
```

### `"emitDeclarationOnly"`

TS будет проверять файлы, но как результат будет создавать только файлы declaration с типами

- `true` - включает опцию
- `false` - отключает

### `"noEmit"`

Используем TS только для проверки типов и преобразовывать файлы ts мы будем с помощью другой программы.

- `true` - включает опцию
- `false` - отключает

### `"importHelpers"`

Добавляет автоматически helpers полифилов для компиляции в более низкие версии. Нужно установить дополнительно `npm i -D tslib`.

- `true` - включает опцию
- `false (по умолчанию)` - отключает

### `"allowJs"`

Нужен для миграции из js в ts. Файлы с двумя расширениями могут лежать вместе.

- `true` - включает опцию
- `false` - отключает

### `"checkJs"`

Отвечает за проверку ошибок в js файлах. Автоматически включается при наличии `"allowJs": true`.

- `true` - включает опцию
- `false` - отключает

### `"experimentalDecorators"`

Включает экспериментальные возможности декораторов. Нужно включить при использовании декораторов.

- `true` - включает опцию
- `false` - отключает

### `"emitDecoratorMetadata"`

Расширяет возможности применения декораторов.

- `true` - включает опцию
- `false` - отключает

### `"resolveJsonModule"`

Если мы хотим использовать импорты рядом лежащего файла config.json нужно включить эту опцию.

- `true` - включает опцию
- `false` - отключает

### `"jsx"`

Если нам требуется если мы используем jsx-разметку.

```json
{
  "jsx": "react-jsx"
}
```

### `"strict"`

Включает настройки строгости.

- `true` - включает опцию
- `false` - отключает

Включает несколько настроек сразу.

- `"alwaysStrict"`
- `"noImplicitAny"`
- `"strictNullChecks"`
- `"strictPropertyInitialization"`
- `"strictFunctionTypes"`
- `"noImplicitThis"`
- `"strictBindCallApply"`

### `"alwaysStrict"`

В каждом файле будет `use strict`.

- `true` - включает опцию
- `false` - отключает

### `"noImplicitAny"`

Если вы не указываете тип и TypeScript не может вывести его из контекста, компилятор обычно по умолчанию выбирает `any`.

Вспомним, что в некоторых местах TypeScript не пытается выводить типы за нас и вместо этого возвращается к самому мягкому типу: `any`. Это не самое худшее, что может случиться — в конце концов, возвращение к `any` — это просто обычный JavaScript.

Однако использование `any` часто сводит на нет сам смысл использования TypeScript. Чем более типизирована ваша программа, тем больше проверки и инструментов вы получите, а это значит, что вы столкнетесь с меньшим количеством ошибок при кодировании. Включение флага `noImplicitAny` выдаст ошибку для любых переменных, тип которых неявно выведен как `any`.

- `true (по умолчанию)` - включает опцию
- `false` - отключает опцию

### `"strictNullChecks"`

По умолчанию значения, такие как `null` и `undefined`, могут быть назначены любому другому типу. Это может облегчить написание некоторого кода, но забывание обрабатывать `null` и `undefined` является причиной бесчисленных ошибок в мире - некоторые считают это ошибкой на миллиард долларов! Флаг `strictNullChecks` делает обработку `null` и `undefined` более явной и избавляет нас от беспокойства о том, забыли ли мы обработать `null` и `undefined`.

- `false (по умолчанию)` - отключает опцию
- `true` - включает опцию

### `"strictPropertyInitialization"`

Следит за тем, чтобы все свойства классов были явно обозначены.

- `true` - включает опцию
- `false` - отключает

### `"strictFunctionTypes"`

Более строгая проверка сигнатур функций.

- `true` - включает опцию
- `false` - отключает

### `"noImplicitThis"`

Проверяет на неявный this.

- `true` - включает опцию
- `false` - отключает

### `"strictBindCallApply"`

Более строгая проверка при вызове функции через bind, call или apply.

- `true` - включает опцию
- `false` - отключает

### `"noPropertyAccessFromIndexSignature"`

Запрещает доступ к дополнительным свойствам, которые заданы динамически через квадратные скобки. Например `[key: string]: string`.

Для доступа к свойствам нужно обращаться через индекс. Например `variable['key']`.

- `true` - включает опцию
- `false (по умолчанию)` - отключает

### `"noUncheckedIndexedAccess"`

Делает поля со свойствами, которые заданы динамически через квадратные скобки, необязательными. Таким образом они становятся `[key: string]: string | undefined`.

Это вынуждает нас далее по коду делать проверки на `undefined`. Например `variable['key']?.length`.

- `true` - включает опцию
- `false (по умолчанию)` - отключает

### `"noImplicitReturns"`

Включает проверку на наличие явного return. Если не будет явного return, то будет ошибка.

- `true` - включает опцию
- `false (по умолчанию)` - отключает

### `"noFallthroughCasesInSwitch"`

При использовании switch-case будет проверять наличие оператора break.

- `true` - включает опцию
- `false (по умолчанию)` - отключает

### `"noUnusedLocals"`

Будет выдавать ошибку при неиспользовании локальных переменных. Если мы что-то создаем, но не используем, то будет ошибка.

- `true` - включает опцию
- `false (по умолчанию)` - отключает

### `"noUnusedParameters"`

Будет выдавать ошибку при неиспользовании параметров в функции. Если мы что-то создаем, но не используем, то будет ошибка.

- `true` - включает опцию
- `false (по умолчанию)` - отключает
