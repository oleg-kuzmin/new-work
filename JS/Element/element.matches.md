# [`element.matches()`](../index.md)

Метод проверяет, будет ли элемент выбран указанным селектором CSS.

## Синтаксис

```js
element.matches(selectors);
```

### `selectors`

Строка, содержащая допустимые селекторы CSS для проверки `element`.

## Возвращает

### `boolean`

- `true` - если element соответствует selectors.
- `false` - в противном случае

## Пример

```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>
```

```js
const birds = document.querySelectorAll('li');

for (const bird of birds) {
  if (bird.matches('.endangered')) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}

// The Philippine eagle is endangered!
```
