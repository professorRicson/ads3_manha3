// js/navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Inicialização do menu hambúrguer
            const burger = document.getElementById('burger');
            const navLinks = document.getElementById('nav-links');

            burger.addEventListener('click', () => {
                navLinks.classList.toggle('nav-active');
                burger.classList.toggle('toggle');
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});
