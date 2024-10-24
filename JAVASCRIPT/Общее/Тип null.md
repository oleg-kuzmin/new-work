# [`Тип null`](../index.md)

`null` — это примитивный тип данных, который состоит из единственного значения `null`.

Значение `null` используют, когда нужно обозначить намеренное отсутствие значения.

`null` обозначает понятия «отсутствует», «ничего», «пусто» или «значение неизвестно». Оно всегда явно задаётся программистом, **JavaScript автоматически не устанавливает его**.

В JavaScript `null` используется только для обозначения конца цепочки прототипов, чтобы показать, что следующий прототип отсутствует.

В языке существует похожий примитив `undefined`, он обозначает, что значение ещё не установлено. Их можно легко спутать, потому что оба обозначают отсутствие значения. Разница состоит в том, что `null` обозначает намеренное отсутствие, а `undefined` неявное.

Например, сам JavaScript использует `undefined` для обозначения не проинициализированных переменных.

Обычно `null` используется для присвоения переменной «пустого» или «неизвестного» значения, а `undefined` – для проверок, была ли переменная назначена.

## Пример

```js
// Специально заданное значение
let password = null;
```
