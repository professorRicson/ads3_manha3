document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
            <nav class="navbar">
                <button class="menu-button">&#9776;</button> <!-- Botão de menu -->
                <div class="menu closed">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </div>
            </nav>
        `;

        const menuButton = document.querySelector('.menu-button');
        const menu = document.querySelector('.menu');

        menuButton.addEventListener('click', () => {
            if (menu.classList.contains('closed')) {
                menu.classList.remove('closed');
                menu.classList.add('open');
            } else {
                menu.classList.remove('open');
                menu.classList.add('closed');
            }
        });
    }
});
