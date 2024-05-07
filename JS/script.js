document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const cartCounter = document.querySelector('.korz');
    let cart = [];

    function displayCart() {
        cartItemsList.innerHTML = '';

        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name + ' image';
            img.classList.add('cart-item-image');
            div.appendChild(img);

            const description = document.createElement('div');
            description.classList.add('cart-item-description');
            description.innerHTML = ` 
                <p>${item.name}</p>
                <p>Ціна: ${item.price} ua</p>   
            `;
            div.appendChild(description);

            const quantityControls = document.createElement('div');
            quantityControls.classList.add('quantity-controls');

            const increaseBtn = document.createElement('button');
            increaseBtn.textContent = '+';
            increaseBtn.addEventListener('click', function() {
                increaseQuantity(item);
            });
            quantityControls.appendChild(increaseBtn);

            const quantityDisplay = document.createElement('span');
            quantityDisplay.textContent = item.quantity;
            quantityControls.appendChild(quantityDisplay);

            const decreaseBtn = document.createElement('button');
            decreaseBtn.textContent = '-';
            decreaseBtn.addEventListener('click', function() {
                decreaseQuantity(item);
            });
            quantityControls.appendChild(decreaseBtn);

            div.appendChild(quantityControls);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Видалити';
            deleteBtn.classList.add('delete-item');
            deleteBtn.addEventListener('click', function() {
                removeItemFromCart(item);
            });
            div.appendChild(deleteBtn);

            cartItemsList.appendChild(div);
        });

        cartCounter.textContent = cart.reduce((total, item) => total + item.quantity, 0);

        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        totalPrice.textContent = 'Всього в кошику: ' + total + ' ua';
    }

    function increaseQuantity(item) {
        item.quantity += 1;
        displayCart();
    }

    function decreaseQuantity(item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            displayCart();
        }
    }

    function removeItemFromCart(item) {
        const index = cart.findIndex(cartItem => cartItem === item);
        if (index !== -1) {
            cart.splice(index, 1);
            displayCart();
        }
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.parentNode.querySelector('h3').textContent;
            const price = parseInt(this.getAttribute('data-price'));
            const image = this.parentNode.querySelector('img').src;
            let item = { name, price, image, quantity: 1 };
            cart.push(item);
            displayCart();
        });
    });

    const cartLink = document.getElementById('cartLink');
    const modal = document.getElementById('cartModal');
    const closeBtn = modal.querySelector('.close');

    cartLink.addEventListener('click', function() {
        modal.style.display = 'block';
        displayCart();
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

