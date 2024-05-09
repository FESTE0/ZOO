// Получаем кнопку "Кошик" и модальное окно
const cartButton = document.getElementById('cartButton');
const modal = document.getElementById('myModal');

// Получаем элемент, в который будем добавлять товары в корзине и общую сумму
const cartItemsElement = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');

// Создаем массив для хранения товаров в корзине
let cartItems = [];

// Функция для добавления товара в корзину
function addToCart(name, price) {
    cartItems.push({ name, price });
    updateCartInfo();
}

// Функция для обновления информации о корзине
function updateCartInfo() {
    cartItemsElement.innerHTML = ''; // Очищаем содержимое корзины перед обновлением

    // Добавляем каждый товар из корзины в модальное окно
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name}: $${item.price}`;

        // Кнопка для удаления товара из корзины
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.addEventListener('click', () => removeFromCart(index));
        itemElement.appendChild(removeButton);

        cartItemsElement.appendChild(itemElement);
    });

    // Обновляем общую сумму
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartInfo();
}

// Обработчик события для кнопки "Кошик"
cartButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Обработчик события для кнопки закрытия модального окна
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрыть модальное окно при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработчик события для кнопок "Додати до кошика"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        addToCart(name, price);
    });
});

