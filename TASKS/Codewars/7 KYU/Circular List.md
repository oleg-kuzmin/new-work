# [`Circular List`](../../index.md)

Создайте круговой список

Круговой список имеет конечный размер, но его можно бесконечно запрашивать для предыдущих и следующих элементов. Это потому, что он действует так, как будто он соединен на концах и зацикливается.

Например, представьте себе `CircularList` из `[1, 2, 3, 4]`. Пять вызовов `next()` подряд должны вернуть `1, 2, 3, 4`, а затем снова `1`. На этом этапе пять вызовов `prev()` подряд должны вернуть `4, 3, 2, 1`, а затем снова `4`.

Ваш `CircularList` создается путем передачи параметра `vargargs`, например, `new CircularList(1, 2, 3)`. Ваш код конструктора/инициализации списка должен выдавать ошибку, если ничего не передано.

## Мое решение

```js
class CircularList {
  constructor(...args) {
    this.arrayArgs = args;
    this.counter = -1;
    this.#checkArgs();
  }

  #checkArgs() {
    if (this.arrayArgs.length === 0) {
      throw new Error('no arguments');
    }
  }

  #result() {
    return this.arrayArgs[this.counter];
  }

  next() {
    this.counter++;
    if (this.counter === this.arrayArgs.length) {
      this.counter = 0;
    }
    return this.#result();
  }

  prev() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.arrayArgs.length - 1;
    }
    return this.#result();
  }
}
```

## Другие решения

```js
class CircularList {
  constructor(...args) {
    this.arr = [...args];
    if (!args || this.arr.length < 1) throw 'Error';
    this.count = -1;
  }

  next() {
    this.count = this.count + 2 > this.arr.length ? (this.count = 0) : this.count + 1;
    return this.arr[this.count];
  }

  prev() {
    this.count = this.count - 1 < 0 ? this.arr.length - 1 : this.count - 1;
    return this.arr[this.count];
  }
}
```
