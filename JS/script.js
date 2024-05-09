
const cartButton = document.getElementById('cartButton');
const modal = document.getElementById('myModal');


const cartItemsElement = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');


let cartItems = [];


function addToCart(name, price) {
    cartItems.push({ name, price });
    updateCartInfo();
}


function updateCartInfo() {
    cartItemsElement.innerHTML = ''; 

  
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name}: $${item.price}`;

     
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.addEventListener('click', () => removeFromCart(index));
        itemElement.appendChild(removeButton);

        cartItemsElement.appendChild(itemElement);
    });

  
    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}


function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartInfo();
}


cartButton.addEventListener('click', function() {
    modal.style.display = 'block';
});


const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        addToCart(name, price);
    });
});

