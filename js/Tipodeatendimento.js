document.addEventListener('DOMContentLoaded', function () {
    // Recupera os dados do localStorage
    var data = {
        firstname: localStorage.getItem('firstname'),
        lastname: localStorage.getItem('lastname'),
        fisioterapia: localStorage.getItem('fisioterapia'),
        pintura: localStorage.getItem('pintura'),
        musicoterapia: localStorage.getItem('musicoterapia'),
        psicologia: localStorage.getItem('psicologia'),
        psicopedagogia: localStorage.getItem('psicopedagogia'),
        educacao_fisica: localStorage.getItem('educacao_fisica')
    };

    // Preenche os campos do formulário
    Object.keys(data).forEach(key => {
        if (data[key]) {
            const field = document.querySelector(`input[name="${key}"][value="${data[key]}"]`);
            if (field) field.checked = true;
        }
    });
});

document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para processar o localStorage

    // Salva os dados no localStorage
    var formData = new FormData(event.target);
    formData.forEach((value, key) => {
        localStorage.setItem(key, value);
    });

    // Opcional: Redirecionar ou exibir uma mensagem de sucesso
    alert('Dados salvos com sucesso!');
});