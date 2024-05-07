// Функция для отображения товаров в корзине в модальном окне
function showCartItems() {
    let cartItemsHTML = '';
    if (cart.length === 0) {
        cartItemsHTML = '<p>Корзина пуста</p>';
    } else {
        cartItemsHTML = '<ul>';
        cart.forEach(item => {
            cartItemsHTML += `<li>${item.name} - $${item.price}</li>`;
        });
        cartItemsHTML += '</ul>';
    }
    document.getElementById('cartItems').innerHTML = cartItemsHTML;
}

// Открываем модальное окно при нажатии на кнопку "Кошик"
document.getElementById('cartButton').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
    showCartItems();
});

// Закрываем модальное окно при нажатии на кнопку закрытия
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

// Закрываем модальное окно при нажатии вне его области
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}



