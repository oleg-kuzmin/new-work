# `.prototype`

JavaScript часто описывают как язык прототипного наследования — каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства. Объект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.

Точнее, свойства и методы определяются в свойстве `prototype` функции-конструктора объектов, а не в самих объектах.

В JavaScript создаётся связь между экземпляром объекта и его прототипом (свойство `__proto__`, которое является производным от свойства `prototype` конструктора), а свойства и методы обнаруживаются при переходе по цепочке прототипов.

## Пример

```js
// Метод split() для строк сохранен здесь:
String.prototype.split;
```