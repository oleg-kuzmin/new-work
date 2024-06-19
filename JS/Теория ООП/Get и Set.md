# Get и Set

Приватные методы получения значения и установления значения. Геттер будет вычисляться каждый раз при изменении значения.

Геттер - по сути, возможность создания динамически высчитываемого свойства. Мы обращаемся к нему как к обычному ключу объекта, не как к функции, но по факту это метод, который возвращает вычисляемые значения.

Сеттер - просто возможность использовать оператор присваивания к свойству, а то, что указано справа от = попадет в сеттер как параметр.

## Пример

```js
class Player {
  static totalPlayers = 0;

  constructor(login, score = 100) {
    this.login = login;
    this._score = score;
    Player.totalPlayers++;
  }

  get score() {
    return this._score;
  }

  set score(num) {
    this.increaseScore(num);
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(name) {
    const [f, l] = name.split(' ');
    this.firstName = f;
    this.lastName = l;
  }
}

const player1 = new Player('tom');
player1.score; // 100 (get)
player1.score = 10; // 10 (set)
```
