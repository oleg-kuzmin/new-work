# [Начало работы](../index.md)

https://jestjs.io/docs/getting-started

Установите Jest с помощью вашего любимого менеджера пакетов:

```bash
npm install --save-dev jest
```

Давайте начнем с написания тестов для гипотетической функции, которая добавляет два числа. Во-первых, создайте файл `sum.js`:

```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Затем создайте файл с именем `sum.test.js`. В нем будет содержаться наш фактический тест:

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Добавьте следующий раздел в свой файл `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Наконец, запустите `yarn test` или `npm test`, и Jest напечатает это сообщение:

```bash
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

**Вы только что успешно написали свой первый тест с помощью Jest!**

В этом тесте использовались `expect` и `toBe` для проверки того, что два значения были абсолютно идентичными. Чтобы узнать о других вещах, которые может проверить Jest, см. раздел [Using Matchers (Использование средств сопоставления)](https://jestjs.io/docs/using-matchers).

## Запуск из командной строки

Вы можете запустить Jest непосредственно из интерфейса командной строки (если он доступен глобально в вашем PATH, например, с помощью `yarn global add jest` или `npm install jest --global`) с множеством полезных опций.

Вот как запустить Jest с файлами, соответствующими `my-test`, используя `config.json` в качестве файла конфигурации и отображая собственное уведомление операционной системы после запуска:

```bash
jest my-test --notify --config=config.json
```

Если вы хотите узнать больше о запуске `jest` через командную строку, загляните на страницу [параметров Jest CLI](https://jestjs.io/docs/cli).

## Дополнительная конфигурация

### Создайте базовый конфигурационный файл

Основываясь на вашем проекте, Jest задаст вам несколько вопросов и создаст базовый конфигурационный файл с кратким описанием для каждого параметра:

```bash
npm init jest@latest
```

### Использование Babel

Чтобы использовать [Babel](https://babeljs.io/), установите необходимые зависимости:

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Настройте Babel для работы с вашей текущей версией Node, создав файл `babel.config.js` в корневом каталоге вашего проекта:

```js
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
```

Идеальная конфигурация для Babel будет зависеть от вашего проекта. Более подробную информацию смотрите в [документации Babel](https://babeljs.io/docs/en/).

#### Упрощение настройки вашего Babel config

> Jest установит для `process.env.NODE_ENV` значение `"test"`, если для него не задано что-то другое. Вы можете использовать это в своей конфигурации, чтобы условно настроить только компиляцию, необходимую для Jest, например

```js
// babel.config.js
module.exports = api => {
  const isTest = api.env('test');
  // Вы можете использовать isTest, чтобы определить, какие пресеты и плагины следует использовать.

  return {
    // ...
  };
};
```

> `babel-jest` автоматически устанавливается при установке Jest и автоматически преобразует файлы, если в вашем проекте существует конфигурация babel. Чтобы избежать такого поведения, вы можете явно сбросить параметр конфигурации `transform`:

```js
// jest.config.js
module.exports = {
  transform: {},
};
```

### Использование Webpack

Jest можно использовать в проектах, использующих [webpack](https://webpack.js.org/) для управления ресурсами, стилями и компиляцией. webpack действительно предлагает некоторые уникальные возможности по сравнению с другими инструментами. Чтобы начать, обратитесь к [руководству webpack](https://jestjs.io/docs/webpack).

### Использование Vite

Jest можно использовать в проектах, которые используют [vite](https://vitejs.dev/) для предоставления исходного кода поверх встроенного ESM, чтобы предоставить некоторые инструменты для интерфейса, vite - это самодостаточный инструмент, который предлагает несколько готовых рабочих процессов. Jest не полностью поддерживается vite из-за того, как работает [система плагинов](https://github.com/vitejs/vite/issues/1955#issuecomment-776009094) от vite, но есть несколько рабочих примеров первоклассной интеграции jest с использованием `vite-jest`, поскольку это поддерживается не полностью, вы также можете ознакомиться с [ограничениями `vite-jest`](https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests). Чтобы начать, обратитесь к [руководству vite](https://vitejs.dev/guide/).

### Использование Parcel

Jest можно использовать в проектах, которые используют [parcel-bundler](https://parceljs.org/) для управления ресурсами, стилями и компиляцией, аналогично webpack. Parcel не требует настройки. Для начала ознакомьтесь с официальными [документами](https://parceljs.org/docs/).

### Использование TypeScript

#### Через `babel`

Jest поддерживает TypeScript через Babel. Сначала убедитесь, что вы следовали инструкциям по [использованию Babel](#использование-babel), приведенным выше. Затем установите `@babel/preset-typescript`:

```bash
npm install --save-dev @babel/preset-typescript
```

Затем добавьте `@babel/preset-typescript` в список пресетов в вашем `babel.config.js`.

```js
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
};
```

Однако есть некоторые [предостережения](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats) по поводу использования TypeScript в Babel. Поскольку поддержка TypeScript в Babel является чисто транспиляцией, Jest не будет проверять ввод текста в ваших тестах по мере их выполнения. Если вы этого хотите, вы можете вместо этого использовать [ts-jest](https://github.com/kulshekhar/ts-jest) или просто запустить компилятор TypeScript `tsc` отдельно (или как часть процесса сборки).

#### Через `ts-jest`

`ts-jest` - это препроцессор TypeScript с поддержкой source map для Jest, который позволяет использовать Jest для тестирования проектов, написанных на TypeScript.

```bash
npm install --save-dev ts-jest
```

Для того чтобы Jest мог транспилировать TypeScript с помощью `ts-jest`, вам также может потребоваться создать файл [конфигурации](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file).

#### Определения типов

Существует два способа ввести [глобальные API-интерфейсы Jest](https://jestjs.io/docs/api) для тестовых файлов, написанных на TypeScript.

Вы можете использовать определения типов, которые поставляются с Jest и будут обновляться при каждом обновлении Jest. Установите пакет `@jest/globals`:

```bash
npm install --save-dev @jest/globals
```

И импортируйте из него API-интерфейсы:

```js
import { describe, expect, test } from '@jest/globals';
import { sum } from './sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

> **Совет:** Смотрите дополнительную документацию по использованию [describe.each/test.each](https://jestjs.io/docs/api#typescript-usage) и [функции mock](https://jestjs.io/docs/mock-function-api#typescript-usage).

Или вы можете установить пакет `@types/jest`. Он предоставляет типы для глобальных параметров Jest без необходимости их импорта.

```bash
npm install --save-dev @types/jest
```

> **Примечание:** `@types/jest` - это сторонняя библиотека, поддерживаемая [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest), поэтому последние функции или версии Jest могут быть еще не доступны. Постарайтесь максимально точно сопоставить версии Jest и `@types/jest`. Например, если вы используете Jest 27.4.0, то идеальным вариантом будет установка 27.4.x из `@types/jest`.

### Использование ESLint

Jest можно использовать с ESLint без какой-либо дополнительной настройки, если вы импортируете [глобальные хелперы Jest](https://jestjs.io/docs/api) (`describe`, `it` и т.д.) из `@jest/globals`, прежде чем использовать их в своем тестовом файле. Это необходимо, чтобы избежать ошибок `no-undef` от ESLint, который не знает о глобальных параметрах Jest.

Если вы хотите избежать такого импорта, вы можете настроить свою [среду ESLint](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments) для поддержки этих глобальных параметров, добавив среду `jest`:

```js
{
  "overrides": [
    {
      "files": ["tests/**/*"],
      "env": {
        "jest": true
      }
    }
  ]
}
```

Или используйте `eslint-plugin-jest`, который имеет аналогичный эффект:

```js
{
  "overrides": [
    {
      "files": ["tests/**/*"],
      "plugins": ["jest"],
      "env": {
        "jest/globals": true
      }
    }
  ]
}
```
