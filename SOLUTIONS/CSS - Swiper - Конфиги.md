# [`CSS - Swiper - Конфиги`](./index.md)

## Пример

```js
const swiperConfig = {
  className: styles.Hero + externalClass,
  loop: true,
  initialSlide: 1,
  spaceBetween: 0,
  slidesPerView: 1,
  modules: [Navigation, Autoplay, Pagination],
  allowTouchMove: false,
  pagination: {
    clickable: false,
    dynamicBullets: true,
    bulletClass: `swiper-pagination-bullet ${styles.Hero__Bullet}`,
    bulletActiveClass: `${styles.Hero__Bullet_Active}`,
  },
  navigation: {
    enabled: false,
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  speed: 1000,
};
```
