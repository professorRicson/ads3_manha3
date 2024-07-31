document.getElementById('socioeconomicForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    var composicaoFamiliar = document.querySelector('input[name="composicao_familiar"]').value;
    var valorComponenteFamiliar = document.querySelector('input[name="valor_componente_familiar"]').value;
    var bpc = document.querySelector('input[name="bpc"]:checked').value;
    var bolsaFamilia = document.querySelector('input[name="bolsa_familia"]:checked').value;
    var pessoasTrabalham = document.querySelector('input[name="pessoas_trabalham"]').value;
    var rendaFamiliar = document.querySelector('input[name="renda_familiar"]:checked').value;
    var residencia = document.querySelector('input[name="residencia"]:checked').value;

    // Armazena os dados no localStorage
    localStorage.setItem('composicaoFamiliar', composicaoFamiliar);
    localStorage.setItem('valorComponenteFamiliar', valorComponenteFamiliar);
    localStorage.setItem('bpc', bpc);
    localStorage.setItem('bolsaFamilia', bolsaFamilia);
    localStorage.setItem('pessoasTrabalham', pessoasTrabalham);
    localStorage.setItem('rendaFamiliar', rendaFamiliar);
    localStorage.setItem('residencia', residencia);

    // Redireciona para a página de informação escolar
    window.location.href = 'InformaçãoEscolar.html';
});