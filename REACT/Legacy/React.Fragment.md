# [`React.Fragment`](../index.md)

Создает пустой родительский тег, который не видно в разметке html.

## Способ 1 - React.Fragment

```jsx
import { React } from 'react';
function App() {
  return (
    <React.Fragment>
      <h1>title</h1>
      <p>paragraph</p>
    </React.Fragment>
  );
}
```

## Способ 2 - Fragment

```jsx
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <h1>title</h1>
      <p>paragraph</p>
    </Fragment>
  );
}
```

## Способ 3 - <></>

Babel оборачивает эту запись в `<React.Fragment></React.Fragment>`.

Также автоматически подключается `import { React } from 'react'`.

```jsx
function App() {
  return (
    <>
      <h1>title</h1>
      <p>paragraph</p>
    </>
  );
}
```
