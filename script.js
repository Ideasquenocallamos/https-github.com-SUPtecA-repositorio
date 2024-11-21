document.getElementById('toggle-theme-btn').addEventListener('click', () => {
    // Cambiar el modo en el body
    document.body.classList.toggle('dark-mode');

    // Cambiar el modo en secciones, nav y footer
    document.querySelectorAll('section, nav, footer').forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Cambiar el modo en tarjetas y contenedores de testimonios
    document.querySelectorAll('.card, .testimonio-container').forEach(element => {
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


// Función para manejar el desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('.navbar a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtener el ID del objetivo
        const targetElement = document.querySelector(targetId); // Seleccionar el elemento objetivo

        // Desplazarse suavemente al elemento objetivo
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Alternar visibilidad del contenido
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Cambiar el icono entre "+" y "-"
        const icon = button.querySelector('.toggle-icon');
        icon.textContent = content.style.display === 'block' ? '−' : '+';
    });
});
