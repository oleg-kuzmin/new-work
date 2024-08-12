# [`abstract (абстрактные классы и свойства)`](../index.md)

Абстрактные классы - Это такие классы, которые не имеют instance (экземпляра). Т.е. становится невозможно создать экземпляр такого класса. Только унаследованных от него не абстрактных классов. Для этого перед классом добавляется ключевое слово `abstract`.

Абстрактные свойства - это такие свойства, которые в родительском классе задают только сигнатуру, а реализация у каждого дочернего класса своя. Для этого перед методом добавляется ключевое слово `abstract`.

## Пример

### Абстрактный класс

```ts
abstract class Vehicle {
  public drive(speed: number): void {
    console.log('Let us go with speed', speed.toFixed());
  }
  public stop() {
    console.log('Stopped');
  }
}

export class Car extends Vehicle {}
const v1 = new Vehicle(); // error
```

### Абстрактные свойства

```ts
abstract class Vehicle {
  abstract drive(speed: number): void; // метод
  abstract color: string; // свойство
  public stop() {
    console.log('Stopped');
  }
}

export class Car extends Vehicle {
  constructor(public color: string) {
    super();
  }

  drive(speed: number): void {
    console.log('Let us go with speed', speed.toFixed());
  }
}
```
