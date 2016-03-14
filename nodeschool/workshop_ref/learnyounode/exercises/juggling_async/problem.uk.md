Ця задача схожа на попередні (HTTP COLLECT) тим, що Вам знову доведеться використовувати `http.get()`. Тільки цього разу Ви отримаєте **три** URL-адреси в якості першого аргументу командного рядка.

Зберіть контент з кожної адреси, котру отримаєте і виведіть його в консоль (stdout). Вам не потрібно виводити кількісь отриманих данних, просто виведіть вміст кожної адреси на новому рядку. Зауважте, що Вам **слід** вивести вміст в тому порядку, в якому Ви отримали URL-адреси в якості аргументів командного рядка.

----------------------------------------------------------------------
## ІНФОРМАЦІЯ

Не очікуйте звичної роботи від трьох серверів! Вони не повернуть Вам повну відповідь у тому порядку, в якому Ви очікуєте, таким чином Ви не зможете просто вивести почергово відповідь з кожного сервера, тому що вони будуть в неправильному порядку.

Вам потрібно буде зібрати всі данні, відслідкувати яка кількість адрес повернула контент і тільки тоді вивести данні в консоль.

Підрахунок кількості викликів функцій-обробників є одним з основних способів управління асинхронності в Node. Замість того, щоб робити це самостійно, Вам може здатись зручним використання додаткових бібліотек, як от [async](http://npm.im/async) або [after](http://npm.im/after). Але в нашому випадку, спробуйте обійтись без додаткових зовнішніх бібліотек.

----------------------------------------------------------------------