// Função para alternar a visibilidade da senha
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

// Função para enviar o código de redefinição de senha
function sendResetCode() {
    var email = document.getElementById("forgotPasswordEmail").value;
    var storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email) {
        var resetCode = generateResetCode(); // Gera um código de redefinição
        localStorage.setItem('resetCode', resetCode); // Armazena o código no localStorage

        // Exibindo a área para inserir o código de redefinição
        document.getElementById("resetCodeArea").style.display = "block";
        
        // Simulando o envio do código para o usuário (em um ambiente real, o código seria enviado por email)
        console.log("Código de redefinição enviado para " + email + ": " + resetCode);
    } else {
        alert("Email não encontrado.");
    }
}

// Função para gerar um código de redefinição
function generateResetCode() {
    return Math.floor(1000 + Math.random() * 9000); // Gera um código de 4 dígitos
}

// Função para redefinir a senha
function resetPassword() {
    var resetCode = document.getElementById("resetCodeInput").value;
    var newPassword = document.getElementById("newPasswordInput").value;
    var confirmNewPassword = document.getElementById("confirmNewPasswordInput").value;
    var resetPasswordError = document.getElementById("resetPasswordError");
    var resetSuccessMessage = document.getElementById("resetSuccessMessage");
    var storedResetCode = localStorage.getItem('resetCode');

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

    // Verifica se o código de redefinição é válido
    if (resetCode !== storedResetCode) {
        resetPasswordError.textContent = "Código de redefinição inválido!";
        return;
    }

    // Atualiza a senha do usuário no localStorage
    var storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        storedUser.password = newPassword;
        localStorage.setItem('user', JSON.stringify(storedUser));
    }

    // Simulação de sucesso na redefinição de senha
    resetPasswordError.textContent = "";
    resetSuccessMessage.style.display = "block";
    document.getElementById("resetCodeArea").style.display = "none";
}

// Função para voltar para a tela de login
function returnToLogin() {
    window.location.href = "login.html";
}
