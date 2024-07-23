// login.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Credenciais de admin
    const adminUsername = "admin";
    const adminPassword = "admin";

    if (username === adminUsername && password === adminPassword) {
        // Armazenar login em localStorage para verificação futura
        localStorage.setItem("isAdminLoggedIn", "true");
        window.location.href = "listagem.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});
