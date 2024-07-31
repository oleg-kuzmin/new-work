# [`Type Guard`](../index.md)

Конструкция `value is number[]` является защитником типа и в данном случае говорит тайпскрипту, что если функция вернёт `true`, то переданная переменная является массивом чисел, и после этого с переменной можно работать как с известным типом.

## Пример

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Если функция возвращает `true`, то `pet` присваивается тип `Fish` и вся функция возвращает `true`.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
}
```

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
