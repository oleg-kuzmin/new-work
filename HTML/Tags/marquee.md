# [`<marquee> (DEPRECATED)`](../index.md)

_(marquee: бегущая строка)_

Тег `<marquee>` позволяет задать область, в которой содержимое будет зациклено двигаться по заданной траектории (горизонтально, вертикально или отражаясь от краёв).

## Пример

```html
<!-- будет двигаться справа налево -->
<marquee>Этот текст будет двигаться справа налево</marquee>

<!-- будет двигаться снизу вверх -->
<marquee direction="up">Этот текст будет двигаться снизу вверх</marquee>

<!-- будет отражаться от стенок -->
<marquee direction="down" width="250" height="200" behavior="alternate" style="border: solid">
  <marquee behavior="alternate"> Этот текст будет отражаться от стенок </marquee>
</marquee>
```

## Чем заменить

```html
<div class="marquee">
  <div class="marquee__inner" aria-hidden="true">
    <span class="marquee__content">Showreel</span>
    <span class="marquee__content">Showreel</span>
    <span class="marquee__content">Showreel</span>
    <span class="marquee__content">Showreel</span>
  </div>
</div>
```

```css
.marquee {
  position: relative;
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 5s linear infinite;
  animation-play-state: paused;
}

.marquee__content {
  font-size: 10vw;
  padding: 0 2vw;
}

.marquee:hover .marquee__inner {
  animation-play-state: running;
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }
  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
```
