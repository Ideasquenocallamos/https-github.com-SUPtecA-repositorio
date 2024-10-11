// Toggle de modo nocturno
const toggleButton = document.getElementById('toggle-theme-btn');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.toggle('dark-mode'));

    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-mode');

    const footer = document.querySelector('footer');
    footer.classList.toggle('dark-mode');
});
