# [`REACT - React.lazy с именованными экспортами`](./index.md)

```js
const myComponent = React.lazy(() => import('./MyComponent').then(module => ({ default: module.MyComponent })));
```
