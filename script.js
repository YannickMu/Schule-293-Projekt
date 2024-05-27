document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});