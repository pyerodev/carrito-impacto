let cart = [];
const shippingCost = 50;

function addToCart(button) {
    const item = button.parentElement;
    const itemName = item.getAttribute('data-name');
    const itemPrice = parseInt(item.getAttribute('data-price'));
    const cartItem = { name: itemName, price: itemPrice };

    cart.push(cartItem);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price;
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Quitar</button>`;
        cartItemsElement.appendChild(li);
    });

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('total').innerText = subtotal + shippingCost;
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Gracias por su compra!');
});
