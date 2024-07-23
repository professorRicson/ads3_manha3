// checkLogin.js

window.onload = function() {
    var isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (isAdminLoggedIn !== "true") {
        // Redireciona para a página de login se não estiver autenticado
        window.location.href = "login.html";
    } else {
        // Limpar o status de login após a autenticação para evitar acesso direto
        localStorage.removeItem("isAdminLoggedIn");
        loadUsers();
    }
};
