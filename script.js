/*meboton*/
// ... código del carrusel ...

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

const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let counter = 0;
let slideWidth = carouselSlides[0].clientWidth; // Inicializar slideWidth

function updateSlideWidth() {
    slideWidth = parseInt(window.getComputedStyle(carouselSlides[0]).width);
}

updateSlideWidth(); // Actualizar slideWidth al cargar la página

window.addEventListener('resize', updateSlideWidth); // Actualizar slideWidth al cambiar el tamaño de la ventana

nextButton.addEventListener('click', () => {
    counter++;
    if (counter >= carouselSlides.length) {
        counter = 0;
    }
    carouselContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevButton.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = carouselSlides.length - 1;
    }
    carouselContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
});

