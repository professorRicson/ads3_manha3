function senha() {
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

function confirmaSenha() {
    var passwordInput = document.getElementById("passwordInput2");
    var togglePassword = document.querySelector(".toggle-password2");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Ocultar Senha";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Mostrar Senha";
    }
}

document.getElementById("passwordInput2").addEventListener("input", function () {
    var password1 = document.getElementById("passwordInput").value;
    var password2 = this.value;
    var passwordError = document.getElementById("passwordError");

    if (password1 !== password2) {
        passwordError.textContent = "As senhas não coincidem!";
    }
    else if (password1 == password2) {
        passwordError.textContent = "As senhas se coincidem"
    }
    else {
        passwordError.textContent = "";
    }
});