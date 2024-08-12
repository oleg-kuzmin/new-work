# [`static (статические свойства и методы)`](../index.md)

Перед название свойства или метода пишется ключевое слово `static`. Эти методы не будут доступны в экземпляре класса.

## Пример

```ts
export class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  get area() {
    return Circle.pi * this.radius * this.radius;
  }
}
```
