# [`Rock Paper Scissors Lizard Spock`](../../index.md)

В этом ката ваша задача — реализовать расширенную версию знаменитой игры «камень-ножницы-бумага». Правила следующие:

- `Scissors` cuts `Paper`
- `Paper` covers `Rock`
- `Rock` crushes `Lizard`
- `Lizard` poisons `Spock`
- `Spock` smashes `Scissors`
- `Scissors` decapitates `Lizard`
- `Lizard` eats `Paper`
- `Paper` disproves `Spock`
- `Spock` vaporizes `Rock`
- `Rock` crushes `Scissors`

**Задача:**

Учитывая два значения из приведенной выше игры, верните результат игрока как `"Player 1 Won!"`, `"Player 2 Won!"` или `"Draw!"`.

**Ввод:**

Значения будут даны как одно из `"rock"`, `"paper"`, `"scissors"`, `"lizard"`, `"spock"`

## Мое решение

```js
function rpsls(pl1, pl2) {
  const win = (a, b) => {
    switch (true) {
      case a === 'scissors' && b === 'paper':
      case a === 'paper' && b === 'rock':
      case a === 'rock' && b === 'lizard':
      case a === 'lizard' && b === 'spock':
      case a === 'spock' && b === 'scissors':
      case a === 'scissors' && b === 'lizard':
      case a === 'lizard' && b === 'paper':
      case a === 'paper' && b === 'spock':
      case a === 'spock' && b === 'rock':
      case a === 'rock' && b === 'scissors':
        return true;
      default:
        return false;
    }
  };

  switch (true) {
    case win(pl1, pl2):
      return 'Player 1 Won!';
    case win(pl2, pl1):
      return 'Player 2 Won!';
    default:
      return 'Draw!';
  }
}
```

## Другие решения

```js
const MATCH = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

function rpsls(pl1, pl2) {
  return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' : MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
}
```

```js
function rpsls(pl1, pl2) {
  if (pl1 === pl2) return 'Draw!';
  let rules = {
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
    scissors: ['lizard', 'paper'],
  };
  if (rules[pl1].includes(pl2)) return 'Player 1 Won!';
  else return 'Player 2 Won!';
}
```
