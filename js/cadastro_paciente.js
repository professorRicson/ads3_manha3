document.addEventListener("DOMContentLoaded", function () {
    var fields = ['nome_usuario', 'cid', 'data_nascimento', 'nome_responsavel', 'vinculo_familiar', 'telefone'];
    fields.forEach(function (field) {
        var value = localStorage.getItem(field);
        if (value) {
            var fieldElement = document.querySelector(`input[name="${field}"], select[name="${field}"]`);
            if (fieldElement) fieldElement.value = value;
        }
    });
});

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nomeUsuario = document.querySelector('input[name="nome_usuario"]').value;
    var cid = document.querySelector('input[name="cid"]').value;
    var dataNascimento = document.querySelector('input[name="data_nascimento"]').value;
    var nomeResponsavel = document.querySelector('input[name="nome_responsavel"]').value;
    var vinculoFamiliar = document.querySelector('select[name="vinculo_familiar"]').value;
    var telefone = document.querySelector('input[name="telefone"]').value;

    localStorage.setItem('nome_usuario', nomeUsuario);
    localStorage.setItem('cid', cid);
    localStorage.setItem('data_nascimento', dataNascimento);
    localStorage.setItem('nome_responsavel', nomeResponsavel);
    localStorage.setItem('vinculo_familiar', vinculoFamiliar);
    localStorage.setItem('telefone', telefone);

    window.location.href = 'InformacoesSocioeconomicas.html';
});

document.addEventListener("DOMContentLoaded", function () {
    var telefoneInput = document.querySelector('input[name="telefone"]');

    telefoneInput.addEventListener('input', function () {
        var telefone = telefoneInput.value.replace(/\D/g, '');

        if (telefone.length > 2 && telefone[2] !== '9') {
            telefone = telefone.slice(0, 2) + '9' + telefone.slice(2);
        }

        var formattedTelefone = formatarTelefone(telefone);
        telefoneInput.value = formattedTelefone;
    });

    function formatarTelefone(telefone) {
        var formatted = telefone;

        if (telefone.length <= 2) {
            formatted = '(' + telefone;
        } else if (telefone.length <= 7) {
            formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2);
        } else if (telefone.length <= 11) {
            formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 5) + '-' + telefone.substr(7);
        } else {
            formatted = '(' + telefone.substr(0, 2) + ') ' + telefone.substr(2, 5) + '-' + telefone.substr(7, 4);
        }

        return formatted;
    }

    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();

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
    
});
