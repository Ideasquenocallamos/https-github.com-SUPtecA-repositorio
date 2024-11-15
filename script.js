document.getElementById('toggle-theme-btn').addEventListener('click', () => {
    // Cambiar el modo en el body
    document.body.classList.toggle('dark-mode');

    // Cambiar el modo en secciones, nav y footer
    document.querySelectorAll('section, nav, footer').forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Cambiar el modo en el modal
    const modalContent = document.querySelector('#modalNuestroFin .modal-content');
    const modalHeader = document.querySelector('#modalNuestroFin .modal-header');
    const btnClose = document.querySelector('#modalNuestroFin .btn-close');
    const btnFin = document.querySelector('#btn'); // Selecciona el botón "Fin"

    if (modalContent) {
        modalContent.classList.toggle('dark-mode'); // Cambiar el contenido del modal
    }
    if (modalHeader) {
        modalHeader.classList.toggle('dark-mode'); // Cambiar el encabezado del modal
    }
    if (btnClose) {
        btnClose.classList.toggle('dark-mode'); // Cambiar el botón de cerrar del modal
    }
    if (btnFin) {
        btnFin.classList.toggle('dark-mode'); // Cambiar el botón "Fin" al modo oscuro
    }

    // Cambiar el texto del botón de tema
    document.getElementById('toggle-theme-btn').innerText = document.body.classList.contains('dark-mode') ? 'Modo Diurno' : 'Modo Nocturno';
});

// Configuración de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.nav-scroll');

    // Agrega eventos de desplazamiento en la barra de navegación
    navContainer.addEventListener('wheel', function (e) {
        // Evita el desplazamiento vertical predeterminado
        e.preventDefault();

        // Desplazamiento horizontal, usando el valor del evento `deltaY`
        navContainer.scrollLeft += e.deltaY;
    });
});
