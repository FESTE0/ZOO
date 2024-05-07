const cart = []; // массив для хранения товаров в корзине

// Функция для добавления товара в корзину
function addToCart(product) {
    cart.push(product);
}

// Функция для отображения информации о корзине
function showCartInfo() {
    let cartInfo = '';
    if (cart.length === 0) {
        cartInfo = 'Корзина пуста';
    } else {
        cartInfo = 'Товары в корзине:\n';
        cart.forEach(item => {
            cartInfo += `${item.name}: $${item.price}\n`;
        });
    }
    document.getElementById('cartInfo').innerText = cartInfo;
    document.getElementById('cartInfo').style.display = 'block';
}

// Находим все кнопки "Додати до кошика" и добавляем обработчик события на каждую из них
const addToCartButtons = document.querySelectorAll('.product-card button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = button.closest('.product-card');
        const product = {
            name: card.querySelector('h3').innerText,
            price: parseFloat(card.querySelector('p').innerText.replace('Ціна: $', ''))
        };
        addToCart(product);
        showCartInfo(); // Вызываем функцию для отображения информации о корзине после добавления товара
    });
});

// Добавляем обработчик события для кнопки "Кошик"
document.getElementById('cartButton').addEventListener('click', showCartInfo);
document.getElementById('cartButton').addEventListener('click', function() {
    console.log('Кнопка "Кошик" нажата');
    showCartInfo();
});
// Функция для отображения информации о корзине
function showCartInfo() {
    console.log('Функция showCartInfo() вызвана');
    let cartInfo = '';
    if (cart.length === 0) {
        cartInfo = 'Корзина пуста';
    } else {
        cartInfo = 'Товары в корзине:\n';
        cart.forEach(item => {
            cartInfo += `${item.name}: $${item.price}\n`;
        });
    }
    document.getElementById('cartInfo').innerText = cartInfo;
    document.getElementById('cartInfo').style.display = 'block';
}
// Добавляем обработчик события для кнопки "Кошик"
document.getElementById('cartButton').addEventListener('click', function() {
    console.log('Кнопка "Кошик" нажата');
    showCartInfo();
});

