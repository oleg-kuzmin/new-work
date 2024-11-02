# [`dynamic`](../index.md)

```jsx
import dynamic from 'next/dynamic';

// Отключаем SSR для компонентов, которые зависят от браузерных API (например window, document)
const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), { ssr: false });

// Просто делаем ленивую загрузку для улучшения производительности (SSR остается включенным)
const LazyLoadedComponent = dynamic(() => import('../components/ClientOnlyComponent'));

const MyPage = () => {
  return (
    <div>
      {/* Компонент, которые загружается только на клиенте (без SSR) */}
      <ClientOnlyComponent />

      {/* Компонент, который просто лениво загружается (SSR включен) */}
      <LazyLoadedComponent />
    </div>
  );
};
```
