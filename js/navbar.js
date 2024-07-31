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



// navbar.js
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

            // Verificação de login
            const loginPlaceholder = document.getElementById('login-placeholder');
            const userInfo = document.getElementById('user-info');
            const userMenu = document.getElementById('user-menu');
            const userName = document.getElementById('user-name');
            const logout = document.getElementById('logout');
            const user = JSON.parse(localStorage.getItem("currentUser"));

            if (user) {
                loginPlaceholder.style.display = 'none';
                userInfo.style.display = 'block';
                userName.textContent = `Olá, ${user.name}`;
                userMenu.style.display = 'block';
            } else {
                loginPlaceholder.style.display = 'block';
                userInfo.style.display = 'none';
                userMenu.style.display = 'none';
            }

            if (logout) {
                logout.addEventListener('click', () => {
                    localStorage.removeItem('currentUser');
                    window.location.reload();
                });
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});

