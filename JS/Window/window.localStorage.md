# `window.localStorage`

Это объект, хранящийся в `window`, который позволяет долговременно сохранять данные в браузере. Работает как хранилище данных в формате ключ-значение — при сохранении данных мы указываем имя поля, в которое должны быть сохранены данные, и затем используем это имя для их получения.

Значения хранятся в виде строк. При попытке сохранения других типов данных, они будут приведены к строке. Например, если записать число, то при чтении нам вернётся число, записанное в строку.

Не имеет ограничений по времени хранения, может быть очищен пользователем вручную или браузером при переполнении автоматически (браузеры на основе движка WebKit, например Safari, очищают `localStorage`, если к нему не обращались в течение 7 дней).

Максимальный объем данных ограничен размером 5MB.

Если вам нужно сохранить данные в браузере на долгое время и объем этих данных достаточно большой, то `localStorage` — то, что вам нужно. Данные будут храниться бессрочно и могут быть стёрты только в двух случаях: при превышении лимита по размеру данных или очистке хранилища пользователем или программно.

Также существует `sessionStorage` - тоже самое, что и `localStorage`, но хранит данные до закрытия браузера.