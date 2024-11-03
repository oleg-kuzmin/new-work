# [`FIXME Hello`](../../index.md)

В предоставленном коде есть метод `hello`, который должен показывать только те атрибуты, которые были явно заданы. Более того, он должен говорить их в том же порядке, в котором они были заданы.

Но он не работает должным образом.

Есть 3 атрибута:

- `name`
- `age`
- `sex` ('M' or 'F')

Когда один и тот же атрибут назначается несколько раз, метод `hello` показывает его только один раз. Если это происходит, порядок зависит от первого назначения этого атрибута, но значение берется из последнего назначения.

Например:

- `Hello.`
- `Hello. My name is Bob. I am 27. I am male.`
- `Hello. I am 27. I am male. My name is Bob.`
- `Hello. My name is Alice. I am female.`
- `Hello. My name is Batman.`

Исправьте код, чтобы мы все смогли уйти домой пораньше.

## Мое решение

```js
class Dinglemouse {
  constructor() {
    this.name = '';
    this.age = '';
    this.sex = '';
    this.helloText = ['Hello.'];
  }

  addToHelloText(index, text) {
    if (index === -1) {
      this.helloText.push(text);
    } else {
      this.helloText[index] = text;
    }
  }

  setAge(age) {
    const index = this.helloText.indexOf(this.ageText);
    this.age = age;
    this.ageText = `I am ${this.age}.`;
    this.addToHelloText(index, this.ageText);
    return this;
  }

  setSex(sex) {
    const index = this.helloText.indexOf(this.sexText);
    this.sex = sex;
    this.sexText = `I am ${this.sex == 'M' ? 'male.' : 'female.'}`;
    this.addToHelloText(index, this.sexText);
    return this;
  }

  setName(name) {
    const index = this.helloText.indexOf(this.nameText);
    this.name = name;
    this.nameText = `My name is ${this.name}.`;
    this.addToHelloText(index, this.nameText);
    return this;
  }

  hello() {
    return this.helloText.join(' ');
  }
}

let test1 = new Dinglemouse().setName('Bob').setAge(27).setSex('M');
console.log(test1.hello()); // 'Hello. My name is Bob. I am 27. I am male.'

let test2 = new Dinglemouse().setAge(27).setSex('M').setName('Bob');
console.log(test2.hello()); // 'Hello. I am 27. I am male. My name is Bob.'

let test3 = new Dinglemouse().setName('Alice').setSex('F');
console.log(test3.hello()); // 'Hello. My name is Alice. I am female.'

let test4 = new Dinglemouse().setName('Batman');
console.log(test4.hello()); // 'Hello. My name is Batman.'
```

## Другие решения

Я не думаю что это хорошее решение, т.к. Javascript не гарантирует порядок свойств объекта.

```js
class Dinglemouse {
  constructor() {
    this.output = {};
  }
  setAge(age) {
    this.age = age;
    this.output.age = ` I am ${age}.`;
    return this;
  }
  setSex(sex) {
    this.sex = sex;
    this.output.sex = ` I am ${sex == 'M' ? 'male' : 'female'}.`;
    return this;
  }
  setName(name) {
    this.name = name;
    this.output.name = ` My name is ${name}.`;
    return this;
  }
  hello() {
    return `Hello.` + Object.values(this.output).join('');
  }
}
```
