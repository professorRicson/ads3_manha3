document.addEventListener('DOMContentLoaded', function () {
    var fields = ['composicao_familiar', 'valor_componente_familiar', 'bpc', 'bolsa_familia', 'pessoas_trabalham', 'renda_familiar', 'residencia'];
    fields.forEach(function (field) {
        var value = localStorage.getItem(field);
        if (value) {
            // Se for um campo de rádio, marque a opção correspondente
            var input = document.querySelector(`input[name="${field}"][value="${value}"]`);
            if (input) input.checked = true;
            // Se for um campo de texto ou seleção, defina o valor
            else {
                var fieldElement = document.querySelector(`input[name="${field}"], select[name="${field}"]`);
                if (fieldElement) fieldElement.value = value;
            }
        }
    });
});

document.getElementById('socioeconomicForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var composicaoFamiliar = document.querySelector('input[name="composicao_familiar"]').value;
    var valorComponenteFamiliar = document.querySelector('input[name="valor_componente_familiar"]').value;
    var bpc = document.querySelector('input[name="bpc"]:checked').value;
    var bolsaFamilia = document.querySelector('input[name="bolsa_familia"]:checked').value;
    var pessoasTrabalham = document.querySelector('input[name="pessoas_trabalham"]').value;
    var rendaFamiliar = document.querySelector('select[name="renda_familiar"]').value;
    var residencia = document.querySelector('input[name="residencia"]:checked').value;

    localStorage.setItem('composicao_familiar', composicaoFamiliar);
    localStorage.setItem('valor_componente_familiar', valorComponenteFamiliar);
    localStorage.setItem('bpc', bpc);
    localStorage.setItem('bolsa_familia', bolsaFamilia);
    localStorage.setItem('pessoas_trabalham', pessoasTrabalham);
    localStorage.setItem('renda_familiar', rendaFamiliar);
    localStorage.setItem('residencia', residencia);

    window.location.href = 'InformaçãoEscolar.html';
});


document.getElementById('socioeconomicForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    var composicaoFamiliar = document.querySelector('input[name="composicao_familiar"]').value;
    var valorComponenteFamiliar = document.querySelector('input[name="valor_componente_familiar"]').value;
    var bpc = document.querySelector('input[name="bpc"]:checked').value;
    var bolsaFamilia = document.querySelector('input[name="bolsa_familia"]:checked').value;
    var pessoasTrabalham = document.querySelector('input[name="pessoas_trabalham"]').value;
    var rendaFamiliar = document.querySelector('select[name="renda_familiar"]').value;
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
