// --- Check initialization --- Перевірка підключення
console.log('Hello! The product JS file is connected.');

const productlist = document.querySelector('.productlist');

const productsInBasket = []; // Массив id товарів що є в корзині (зберігаеться в lacalStorage)

// --- Google sheet to JSON --- Конвертація таблиці в JSON
const url = 'https://docs.google.com/spreadsheets/d/'; // Загальна адреса таблиць гугл
const sheetId = '1Xz2dXYmAuDDYaR0yLkGsJVGX0TeLFxDKFAbaPNQ53Yo'; // Ідентифікатор таблиці
const query1 = `/gviz/tq?`; // Parameters google API visualization / Параметри візуалізації Гугл
const query2 = `&tqx=out:json`; // Додаткові параметри
const query3 = `&sheet=productlist`; // Select page / Вибір сторінки
// Формуємо кінцеву точку запиту (посилання)
const endPoint = `${url}${sheetId}${query1}${query2}${query3}`;
console.log(endPoint);
// Fetch запит
fetch(endPoint)
    .then(response => response.text()) // надсилаємо запит / отримуємо відповідь в змінну "response" / конвертуємо змінну в формат тексту
    .then(data => { // записуємо результат попередньої функції у нову змінну 'data'
        let correctData = data.slice(441, -25); // обрізаємо зайве зі строки 'data', щоб конвертувати її в JSON
        // перевірка на довбану ':' яка інколи проскакує на початок стрічки
        if (correctData[0] === ':') {
            correctData = correctData.substring(1); // обрізаємо перший символ якщо він ":"
        }
        const json = JSON.parse(correctData); // конвертуємо в JSON
        console.log(json);
        // Rendering products list / формуємо список продукції
        for (let i = 0; i < 6; i++) {
            productlist.innerHTML += `
            <div class="product">
                <div class="produkt-item">
                    <a class="produkt-item__img">
                        <img class="produkt-img" src="${json[i]['c'][2]['v']}" alt="product image">
                    </a>
                    <div class="product-description">
                        <h4 class="product-description__header">${json[i]['c'][1]['v']}</h4>
                        <p class="product-description__text">${json[i]['c'][3]['v']}</p>
                        <p class="product-price">Ціна: ${json[i]['c'][5]['v']} &#8372;</p>
                        <a href="" id="productID_${json[i]['c'][0]['v']}" class="product-description__link links">детальніше &gt;</a>
                    </div>
                    <div class="product-buttons">
                        <button class="product-buttons__basket" data-id="${json[i]['c'][0]['v']}">
                        <i class="material-icons basket-icon">shopping_basket</i>
                        <i class="material-icons check-icon hiden">check_circle_outline</i></button>
                    </div>
                </div>
            </div>`;
        }
        productlist.innerHTML += `<button class="product-buttons__more"><a href="shop.html">переглянути всі</a></button>`;

        const basketPils = document.querySelectorAll('.product-buttons__basket'); // Массив кнопок "корзина"


        basketPils.forEach((basketPil) => basketPil.addEventListener('click', function () { // Прослуховувач на кожну кнопку "корзина"
            console.log('Basket button is clicked!');
            console.log(json[basketPil.dataset.id]['c'][1]['v']);
            // Вибираємо елемент корзину якого був клік (делегування)
            productlist.onclick = function (event) {
                let target = event.target; // де був клік?
                //console.log(target.classList);
                if (target.classList != 'product-buttons__basket') return; // Якщо клік був не на кнопці "корзина", то ігноруємо
                changeButton(target); // Якщо клік був на кнопці "корзина", то змінюємо іконку
            }


            productsInBasket.push(basketPil.dataset.id);
            localStorage.setItem('BASKET', productsInBasket);
            console.log(productsInBasket);
        }));
    });

