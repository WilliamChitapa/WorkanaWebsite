const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Alterna o menu entre visível/invisível
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Animação do hambúrguer para "X"
    navLinks.classList.toggle('show');    // Mostra ou esconde o menu
});


