# [`literal (литерал)`](../index.md)

Специальный тип, который равен одному конкретному значению.

Все переменные объявленные с помощью `const` получают тип литерал.

Используется например для задания `props` с конкретными значениями.

## Пример

### Union

```ts
const number = 108; // : 108
const string = 'str'; // : 'str'
function fetchWithAuth(url: string, method: 'post' | 'get') {}
```

### Шаблонные литералы

```ts
type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin-${Side}`; // 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left'
type Padding = `padding=${Side}`; // 'padding-top' | 'padding-right' | 'padding-bottom' | 'padding-left'
```
