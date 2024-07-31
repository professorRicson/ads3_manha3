document.addEventListener('DOMContentLoaded', function () {
    // Recupera os dados do localStorage
    var composicaoFamiliar = localStorage.getItem('composicaoFamiliar');
    var valorComponenteFamiliar = localStorage.getItem('valorComponenteFamiliar');
    var bpc = localStorage.getItem('bpc');
    var bolsaFamilia = localStorage.getItem('bolsaFamilia');
    var pessoasTrabalham = localStorage.getItem('pessoasTrabalham');
    var rendaFamiliar = localStorage.getItem('rendaFamiliar');
    var residencia = localStorage.getItem('residencia');

    // Pré-preenche os campos conforme necessário (se houver campos correspondentes)
    if (composicaoFamiliar) document.querySelector('input[name="serie"]').value = composicaoFamiliar;
    if (valorComponenteFamiliar) document.querySelector('input[name="nome_escola"]').value = valorComponenteFamiliar;
    // Adicione pré-preenchimento para outros campos conforme necessário
});