// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el menú hamburguesa, los enlaces de navegación y la 'X'
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close'); // Selecciona la 'X'

    // Función para alternar el menú
    const toggleMenu = () => {
        navLinks.classList.toggle('open'); // Alternar la clase 'open'
        hamburgerMenu.classList.toggle('open'); // Alternar la clase 'open' en el menú hamburguesa
    };

    // Agregar un evento de clic al menú hamburguesa
    hamburgerMenu.addEventListener('click', toggleMenu);

    // Agregar un evento de clic a la 'X' para cerrar el menú
    closeBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el evento se propague al contenedor hamburguesa
        navLinks.classList.remove('open'); // Cierra el menú
        hamburgerMenu.classList.remove('open'); // Remover la clase 'open'
    });

    // Agregar eventos de clic a los enlaces de navegación para cerrarlo al hacer clic
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open'); // Cierra el menú al hacer clic en un enlace
            hamburgerMenu.classList.remove('open'); // Remover la clase 'open'
        });
    });
});












