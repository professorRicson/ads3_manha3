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
    } else {
        passwordError.textContent = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var telefoneInput = document.querySelector('input[name="telefone"]');

    telefoneInput.addEventListener('input', function () {
        var telefone = telefoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        var formattedTelefone = formatarTelefone(telefone);
        telefoneInput.value = formattedTelefone;
    });

    function formatarTelefone(telefone) {
        var formatted = telefone;

        // Adiciona o prefixo "9" se o telefone não começar com "9" e tiver 9 dígitos
        if (telefone.length === 9 && !telefone.startsWith('9')) {
            formatted = '9' + telefone;
        }

        // Formatação para (DDD) 99999-9999 ou (DDD) 9999-9999
        if (telefone.length === 10) {
            formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 4) + '-' + telefone.substr(6, 4);
        } else if (telefone.length === 11) {
            formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 5) + '-' + telefone.substr(7, 4);
        }

        return formatted;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var avatarInput = document.getElementById('avatarInput');
    var avatarPreview = document.getElementById('avatarPreview');

    avatarInput.addEventListener('change', function () {
        var file = avatarInput.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                avatarPreview.src = e.target.result; // Define o src da imagem para o arquivo carregado
                avatarPreview.style.display = 'block'; // Exibe a imagem
            };

            // Carrega o arquivo como URL de dados
            reader.readAsDataURL(file);
        } else {
            avatarPreview.src = 'img/avatar-placeholder.png'; // Mostra o placeholder se nenhum arquivo for selecionado
            avatarPreview.style.display = 'none'; // Esconde a imagem se nenhum arquivo for selecionado
        }
    });

    var telefoneInput = document.querySelector('input[name="telefone"]');

    telefoneInput.addEventListener('input', function () {
        var telefone = telefoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        var formattedTelefone = formatarTelefone(telefone);
        telefoneInput.value = formattedTelefone;
    });

    function formatarTelefone(telefone) {
        var formatted = telefone;

        // Adiciona o prefixo "9" se o telefone não começar com "9" e tiver 9 dígitos
        if (telefone.length === 9 && !telefone.startsWith('9')) {
            formatted = '9' + telefone;
        }

        // Formatação para (DDD) 99999-9999 ou (DDD) 9999-9999
        if (telefone.length === 10) {
            formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 4) + '-' + telefone.substr(6, 4);
        } else if (telefone.length === 11) {
            formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 5) + '-' + telefone.substr(7, 4);
        }

        return formatted;
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    var nomeUsuario = document.querySelector('input[name="nome_usuario"]').value;
    var cid = document.querySelector('input[name="cid"]').value;
    var dataNascimento = document.querySelector('input[name="data_nascimento"]').value;
    var nomeResponsavel = document.querySelector('input[name="nome_responsavel"]').value;
    var vinculoFamiliar = document.querySelector('select[name="vinculo_familiar"]').value;
    var telefone = document.querySelector('input[name="telefone"]').value;

    localStorage.setItem('nomeUsuario', nomeUsuario);
    localStorage.setItem('cid', cid);
    localStorage.setItem('dataNascimento', dataNascimento);
    localStorage.setItem('nomeResponsavel', nomeResponsavel);
    localStorage.setItem('vinculoFamiliar', vinculoFamiliar);
    localStorage.setItem('telefone', telefone);

    window.location.href = 'InformacoesSocioeconomicas.html';
});