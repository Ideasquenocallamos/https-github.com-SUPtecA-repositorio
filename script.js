// Alternar entre modo oscuro y claro
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
    const btnFin = document.querySelector('#btn'); // Botón "Fin"

    if (modalContent) modalContent.classList.toggle('dark-mode');
    if (modalHeader) modalHeader.classList.toggle('dark-mode');
    if (btnClose) btnClose.classList.toggle('dark-mode');
    if (btnFin) btnFin.classList.toggle('dark-mode');

    // Cambiar el texto del botón de tema
    document.getElementById('toggle-theme-btn').innerText = 
        document.body.classList.contains('dark-mode') ? 'Modo Diurno' : 'Modo Nocturno';
});

// Desplazamiento suave en los enlaces del menú de navegación
document.querySelectorAll('.navbar a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar comportamiento predeterminado
        const targetId = this.getAttribute('href'); // Obtener el ID del objetivo
        const targetElement = document.querySelector(targetId);

        // Desplazamiento suave al elemento objetivo
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mostrar y ocultar contenido dinámicamente
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Alternar visibilidad del contenido
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Cambiar el icono entre "+" y "−"
        const icon = button.querySelector('.toggle-icon');
        icon.textContent = content.style.display === 'block' ? '−' : '+';
    });
});
