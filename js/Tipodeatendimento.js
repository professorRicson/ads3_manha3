// Recupera e preenche os dados ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    var fields = ['firstname', 'lastname', 'fisioterapia', 'pintura', 'musicoterapia', 'psicologia', 'psicopedagogia', 'educacao_fisica'];
    fields.forEach(function (field) {
        var value = localStorage.getItem(field);
        if (value) {
            var input = document.querySelector(`input[name="${field}"][value="${value}"]`);
            if (input) input.checked = true;
            else document.querySelector(`input[name="${field}"]`).value = value;
        }
    });
});

// Salva os dados no localStorage ao submeter o formulário
document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    formData.forEach((value, key) => {
        localStorage.setItem(key, value);
    });
    alert('Dados salvos com sucesso!');
});

// Mantém os dados ao voltar para a página anterior
document.querySelector('.back-arrow a').addEventListener('click', function() {
    history.back(); // Volta para a página anterior mantendo os dados no localStorage
});
