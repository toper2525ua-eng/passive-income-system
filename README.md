# Passive Income System MVP

Статичний MVP-веббот для воронки:

`TikTok -> Telegram -> бот -> довіра -> оплата`

## Що тепер у проєкті

- 1 стартовий екран
- 7 головних кнопок
- окремий екран оплати
- окремий екран після оплати
- короткі блоки без перевантаження

## Структура екранів

1. `home` — головний екран
2. `what` — що це
3. `how` — як це працює
4. `inside` — що всередині
5. `results` — результати
6. `risks` — ризики
7. `faq` — FAQ
8. `payment` — оплата
9. `after-payment` — сторінка після оплати

## Де редагувати контент

Усе зведено в [script.js](./script.js):

- `appConfig.links` — Telegram, Bybit, платформа ботів, оплата
- `appConfig.mainButtons` — 7 головних кнопок
- `appConfig.screens` — тексти кожного екрана

У кожному екрані можна змінювати:

- `title`
- `paragraphs`
- `bullets`
- `metrics`
- `media` — місця під скріни
- `faq`
- `note`
- `actions`

## Що змінити перед запуском

1. Оновити `appConfig.links.telegram`
2. Оновити `appConfig.links.payment`
3. Додати посилання в `appConfig.links.platform`, якщо потрібна кнопка `+5$`
4. Замінити плейсхолдери в `results.media` на свої скріни й тексти
5. За потреби скоригувати тексти під реальний офер

## Файли

- [index.html](./index.html) — каркас сторінки
- [styles.css](./styles.css) — дизайн і адаптивність
- [script.js](./script.js) — логіка екранів і весь контент

## Як відкрити

Просто відкрийте `index.html` у браузері.
