// Создаем объект корзины
const cart = [];

// Функция для добавления товара в корзину
function addToCart(product) {
    cart.push(product);
    alert('Товар успешно добавлен в корзину!');
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
    });
});
// Находим кнопку "Кошик"
const cartButton = document.querySelector('.top button');

// Функция для обновления информации о корзине
function updateCartInfo() {
    const cartItemCount = cart.length;
    cartButton.innerText = `Кошик (${cartItemCount})`;
}

// Обновляем информацию о корзине при загрузке страницы
updateCartInfo();
