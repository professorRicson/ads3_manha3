function togglePassword(inputId) {
    var passwordInput = document.getElementById(inputId);
    var togglePassword = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Ocultar Senha";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Mostrar Senha";
    }
}

function sendResetCode() {
    var email = document.getElementById("forgotPasswordEmail").value;

    // Simulando o envio de um código de redefinição por email (substitua com sua lógica real)
    var resetCode = generateResetCode(); // Função que gera um código de reset (pode ser aleatório)

    // Exibindo a área para inserir o código de redefinição
    document.getElementById("resetCodeArea").style.display = "block";

    // Simulando o envio do código para o usuário (pode ser enviado por email)
    console.log("Código de redefinição enviado para " + email + ": " + resetCode);
}

function generateResetCode() {
    // Função de exemplo para gerar um código de redefinição (pode ser aleatório)
    return Math.floor(1000 + Math.random() * 9000); // Gera um código de 4 dígitos
}

function resetPassword() {
    var resetCode = document.getElementById("resetCodeInput").value;
    var newPassword = document.getElementById("newPasswordInput").value;
    var confirmNewPassword = document.getElementById("confirmNewPasswordInput").value;
    var resetPasswordError = document.getElementById("resetPasswordError");
    var resetSuccessMessage = document.getElementById("resetSuccessMessage");

    // Validação simples para garantir que os campos não estejam vazios
    if (resetCode === "" || newPassword === "" || confirmNewPassword === "") {
        resetPasswordError.textContent = "Todos os campos são obrigatórios!";
        return;
    }

    // Validação se as senhas novas coincidem
    if (newPassword !== confirmNewPassword) {
        resetPasswordError.textContent = "As senhas não coincidem!";
        return;
    }

    // Simulação de sucesso na redefinição de senha
    resetPasswordError.textContent = "";
    resetSuccessMessage.style.display = "block";
    document.getElementById("resetCodeArea").style.display = "none";
}

function returnToLogin() {
    // Redireciona para a página de login
    window.location.href = "login.html";
}


