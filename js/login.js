function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var togglePassword = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Ocultar Senha";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Mostrar Senha";
    }
}

function login(event) {
    event.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login bem-sucedido!");
        window.location.href = "listagem.html";
    } else {
        alert("Email ou senha incorretos!");
    }
}
