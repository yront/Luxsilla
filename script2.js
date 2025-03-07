const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const checkoutButton = document.querySelector('.checkout-button');

let cart = [];
let cartItemId = 0; // Variable para generar IDs únicos

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name} - $${item.price}</span>
            <button class="remove-item" data-cart-item-id="${item.cartItemId}">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const id = event.target.dataset.id;
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);
        const image = event.target.dataset.image;
        cart.push({ id, name, price, image, cartItemId: cartItemId++ }); // Generar un cartItemId único
        updateCart();
    } else if (event.target.classList.contains('remove-item')) {
        const cartItemIdToRemove = parseInt(event.target.dataset.cartItemId);
        cart = cart.filter(item => item.cartItemId !== cartItemIdToRemove);
        updateCart();
    }
});

checkoutButton.addEventListener('click', () => {
    alert('¡Gracias por tu compra!');
    cart = [];
    updateCart();
});

updateCart();

/*menu*/
const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        // Pantalla móvil: mostrar/ocultar menú móvil
        mobileNav.classList.toggle('show');
    } else {
        // Pantalla grande: mostrar/ocultar menú lateral (o desplegable)
        // Aquí puedes implementar la lógica para mostrar/ocultar el menú lateral
        // Por ejemplo, puedes agregar una clase 'show-sidebar' a un elemento contenedor
        console.log('Menú lateral en pantalla grande');
    }
});
