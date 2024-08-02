document.addEventListener('DOMContentLoaded', function () {
    // Recupera os dados do localStorage
    var composicaoFamiliar = localStorage.getItem('composicaoFamiliar');
    var valorComponenteFamiliar = localStorage.getItem('valorComponenteFamiliar');
    var bpc = localStorage.getItem('bpc');
    var bolsaFamilia = localStorage.getItem('bolsaFamilia');
    var pessoasTrabalham = localStorage.getItem('pessoasTrabalham');
    var rendaFamiliar = localStorage.getItem('rendaFamiliar');
    var residencia = localStorage.getItem('residencia');

    // Pré-preenche os campos conforme necessário
    if (composicaoFamiliar) document.querySelector('input[name="serie"]').value = composicaoFamiliar;
    if (valorComponenteFamiliar) document.querySelector('input[name="nome_escola"]').value = valorComponenteFamiliar;
    // Adicione pré-preenchimento para outros campos conforme necessário
});

document.getElementById('schoolForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para processar o localStorage

    // Salva os dados no localStorage
    var formData = new FormData(event.target);
    formData.forEach((value, key) => {
        localStorage.setItem(key, value);
    });

    // Redireciona para a página de Tipos de Atendimento
    window.location.href = 'Tipodeatendimento.html';
});

document.addEventListener('DOMContentLoaded', function () {
    // Recupera os dados do localStorage
    var composicaoFamiliar = localStorage.getItem('composicaoFamiliar');
    var valorComponenteFamiliar = localStorage.getItem('valorComponenteFamiliar');
    var bpc = localStorage.getItem('bpc');
    var bolsaFamilia = localStorage.getItem('bolsaFamilia');
    var pessoasTrabalham = localStorage.getItem('pessoasTrabalham');
    var rendaFamiliar = localStorage.getItem('rendaFamiliar');
    var residencia = localStorage.getItem('residencia');

    // Pré-preenche os campos conforme necessário
    if (composicaoFamiliar) document.querySelector('input[name="serie"]').value = composicaoFamiliar;
    if (valorComponenteFamiliar) document.querySelector('input[name="nome_escola"]').value = valorComponenteFamiliar;
    // Adicione pré-preenchimento para outros campos conforme necessário
});

document.getElementById('schoolForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para processar o localStorage

    // Salva os dados no localStorage
    var formData = new FormData(event.target);
    formData.forEach((value, key) => {
        localStorage.setItem(key, value);
    });

    // Redireciona para a página de Tipos de Atendimento
    window.location.href = 'Tipodeatendimento.html';
});