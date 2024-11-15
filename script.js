// Cambio de tema entre claro y oscuro
document.getElementById('toggle-theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('section, nav, footer').forEach(element => {
        element.classList.toggle('dark-mode');
    });
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
