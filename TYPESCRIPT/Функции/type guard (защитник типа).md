# [`type guard (защитник типа)`](../index.md)

По сути `if else` это тоже защитники типа, но часто создаются отдельные функции, которые могут что-то доказать TS.

В этих функциях в качестве типа возвращаемого значения указывается не просто тип, а некая конструкция `[argument] is [type]`.

## Пример

### type

Если функция `type guard` (isFish) возвращает `true`, то `pet` присваивается тип `Fish` и вся функция возвращает `true`.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Отдельная функция-предикат
// В данном случае мы говорим TS, что если функция вернёт `true`,
// то переданная переменная является конкретным типом,
// после этого с переменной можно работать как с известным типом.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Использование
function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
}
```

### interface и type

```ts
interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  return !!order && 'email' in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return !!order && 'callerNumber' in order;
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}
```
