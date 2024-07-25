# [`useNavigate()`](../index.md)

Хук возвращает функцию. Функция работает с двумя параметрами: 1 - может сказать куда мы хотим переадресовать пользователя, 2 - опции.

Может принимать ссылку `navigate('/')` для навигации по конкретному адресу.

Для навигации по истории используются цифры: `navigate(-1)` на одну страницу назад, `navigate(-2)` на две страницы назад, и так далее.

Для навигации вперед используются положительные числа.

## Пример

```jsx
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  // возвращает назад по истории
  const goBack = () => navigate(-1);

  // возвращает на главную, replace: true - не сохранит запись в истории
  // плохая практика для кнопки, лучше использовать компонент <Link>
  const goHome = () => navigate('/', { replace: true });

  // можно использовать состояние и далее получать его в useLocation()
  const goBack = () => navigate('/posts', { state: 123 });

  return <button onClick={goBack}>Go back</button>;
}
```
