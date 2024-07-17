document.getElementById('patientForm').addEventListener('submit', function(event) {
    const form = event.target;
    const inputs = form.querySelectorAll('input[type="radio"]');
    let valid = true;

    inputs.forEach(input => {
        if (!form.querySelector(`input[name="${input.name}"]:checked`)) {
            valid = false;
        }
    });

    if (!valid) {
        alert('Por favor, selecione uma opção para todos os campos.');
        event.preventDefault(); // Impede o envio do formulário se algum campo não estiver preenchido
    }
});
