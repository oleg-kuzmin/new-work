# [`useContext()`](../index.md)

Нужен для того, чтобы не пробрасывать `props` на много уровней ниже. Вся схема выглядит так: создается контекст при помощи `createContext()` и используется далее в компоненте через `useContext()`.

## Использование

### Создание компонента

Создается специальный компонент, который внутри себя скрывает данные и методы, изменяющие эти данные. Все это компонент готов предоставить кому угодно, кто будет являться его дочерним элементом.

```jsx
// импорт createContext
import { createContext, useState } from 'react';

// создание переменной CustomContext
export const CustomContext = createContext();

// создание компонента
export const Context = props => {
  const [books, setBooks] = useState([
    { id: 1, title: 'JS' },
    { id: 2, title: 'React' },
    { id: 3, title: 'NodeJS' },
  ]);

  const addBook = book => {
    setBooks([book, ...books]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  // создание объекта для props value в CustomContext.Provider
  const value = {
    books,
    addBook,
    removeBook,
  };

  // возврат обернутых компонентов
  return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>;
};
```

### Использование контекста

```jsx
// импорт useContext
import { useContext } from 'react';

// импорт переменной CustomContext
import { CustomContext } from '../hooks/Context';

function Books() {
  // в качестве аргумента принимает созданную переменную CustomContext
  // возвращает созданный в специальном компоненте объект value
  // при помощи деструктуризации достаем любые нужные свойства и методы
  const { books = [] } = useContext(CustomContext);

  return (
    <div className="books">
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </div>
  );
}

function Book(props) {
  // в качестве аргумента принимает созданную переменную CustomContext
  // возвращает созданный в специальном компоненте объект value
  // при помощи деструктуризации достаем любые нужные свойства и методы
  const { removeBook } = useContext(CustomContext);

  return <h2 onClick={() => removeBook(props.id)}>{props.title}</h2>;
}
```
