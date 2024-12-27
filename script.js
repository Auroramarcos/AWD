// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // *** Funcionalidad del Menú ***
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

    // *** Funcionalidad de los Carruseles ***
    const carousels = document.querySelectorAll('.carousel'); // Selecciona todos los carruseles

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        const changeImage = () => {
            // Quitar la clase 'active' de la imagen actual
            images[currentIndex].classList.remove('active');

            // Calcular el índice de la siguiente imagen
            currentIndex = (currentIndex + 1) % images.length;

            // Agregar la clase 'active' a la nueva imagen
            images[currentIndex].classList.add('active');
        };

        // Cambiar la imagen cada 2 segundos
        setInterval(changeImage, 2000);

        // Mostrar la primera imagen al inicio
        images[currentIndex].classList.add('active');
    });
    
});

