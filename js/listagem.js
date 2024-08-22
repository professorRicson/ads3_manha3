document.addEventListener('DOMContentLoaded', () => {
    loadPacientes();
    loadFuncionarios();

    // Função para carregar e exibir a lista de funcionários
    function loadFuncionarios() {
        var funcionarios = JSON.parse(localStorage.getItem("users")) || [];
        var userList = document.getElementById("userList");

        userList.innerHTML = "";

        funcionarios.forEach((funcionario, index) => {
            var row = document.createElement("tr");

            var nomeCell = document.createElement("td");
            nomeCell.textContent = funcionario.firstname;
            row.appendChild(nomeCell);

            var sobrenomeCell = document.createElement("td");
            sobrenomeCell.textContent = funcionario.lastname;
            row.appendChild(sobrenomeCell);

            var emailCell = document.createElement("td");
            emailCell.textContent = funcionario.email;
            row.appendChild(emailCell);

            var actionsCell = document.createElement("td");

            var editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "edit-button";
            editButton.onclick = function () {
                // Implementar lógica de edição se necessário
                editFuncionario(index);
            };
            actionsCell.appendChild(editButton);

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "delete-button";
            deleteButton.onclick = function () {
                deleteFuncionario(index);
            };
            actionsCell.appendChild(deleteButton);

            row.appendChild(actionsCell);
            userList.appendChild(row);
        });
    }

    // Função para excluir um funcionário
    function deleteFuncionario(index) {
        let funcionarios = JSON.parse(localStorage.getItem("users")) || [];
        funcionarios.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(funcionarios));
        loadFuncionarios();
    }

    // Função para editar um funcionário
    // Função para editar um funcionário
    function editFuncionario(index) {
        let funcionarios = JSON.parse(localStorage.getItem("users")) || [];
        let funcionario = funcionarios[index];

        // Redirecionar para a página de cadastro com os dados do funcionário como parâmetros na URL
        const url = new URL('cadastro.html', window.location.href);
        url.searchParams.set('id', index);
        url.searchParams.set('firstname', funcionario.firstname);
        url.searchParams.set('lastname', funcionario.lastname);
        url.searchParams.set('email', funcionario.email);
        window.location.href = url.toString();
    }


    // Função para carregar e exibir a lista de pacientes
    function loadPacientes() {
        var pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        var patientList = document.getElementById("patientList");

        patientList.innerHTML = "";

        pacientes.forEach((paciente, index) => {
            var row = document.createElement("tr");

            var nomeCell = document.createElement("td");
            nomeCell.textContent = paciente.nome_usuario;
            row.appendChild(nomeCell);

            var cidCell = document.createElement("td");
            cidCell.textContent = paciente.cid;
            row.appendChild(cidCell);

            var dataNascimentoCell = document.createElement("td");
            dataNascimentoCell.textContent = paciente.data_nascimento;
            row.appendChild(dataNascimentoCell);

            var nomeResponsavelCell = document.createElement("td");
            nomeResponsavelCell.textContent = paciente.nome_responsavel;
            row.appendChild(nomeResponsavelCell);

            var vinculoFamiliarCell = document.createElement("td");
            vinculoFamiliarCell.textContent = paciente.vinculo_familiar;
            row.appendChild(vinculoFamiliarCell);

            var telefoneCell = document.createElement("td");
            telefoneCell.textContent = paciente.telefone;
            row.appendChild(telefoneCell);

            var actionsCell = document.createElement("td");

            var editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "edit-button";
            editButton.onclick = function () {
                // Implementar lógica de edição se necessário
                editPaciente(index);
            };
            actionsCell.appendChild(editButton);

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "delete-button";
            deleteButton.onclick = function () {
                deletePaciente(index);
            };
            actionsCell.appendChild(deleteButton);

            var moreInfoButton = document.createElement("button");
            moreInfoButton.textContent = "Mais Informações";
            moreInfoButton.className = "more-info-button";
            moreInfoButton.onclick = function () {
                showDetails(paciente);
            };
            actionsCell.appendChild(moreInfoButton);

            row.appendChild(actionsCell);
            patientList.appendChild(row);
        });
    }

    // Função para excluir um paciente
    function deletePaciente(index) {
        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        pacientes.splice(index, 1);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        loadPacientes();
    }

    // Função para editar um paciente
    function editPaciente(index) {
        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        let paciente = pacientes[index];

        // A lógica para edição pode ser adicionada aqui, como redirecionar para uma página de edição
        console.log('Editar paciente:', paciente);
    }

    // Função para mostrar detalhes do paciente
    function showDetails(paciente) {
        const detailCard = document.getElementById("detail-card");
        const detailContent = document.getElementById("detail-content");

        detailContent.innerHTML = `
            <h3>Detalhes do Paciente</h3>
            <p><strong>Nome:</strong> ${paciente.nome_usuario}</p>
            <p><strong>CID:</strong> ${paciente.cid}</p>
            <p><strong>Data de Nascimento:</strong> ${paciente.data_nascimento}</p>
            <p><strong>Nome do Responsável:</strong> ${paciente.nome_responsavel}</p>
            <p><strong>Vínculo Familiar:</strong> ${paciente.vinculo_familiar}</p>
            <p><strong>Telefone:</strong> ${paciente.telefone}</p>
            <p><strong>Composição Familiar:</strong> ${paciente.composicao_familiar}</p>
            <p><strong>Valor do Componente Familiar:</strong> ${paciente.valor_componente_familiar}</p>
            <p><strong>BPC:</strong> ${paciente.bpc}</p>
            <p><strong>Bolsa Família:</strong> ${paciente.bolsa_familia}</p>
            <p><strong>Pessoas que Trabalham:</strong> ${paciente.pessoas_trabalham}</p>
            <p><strong>Renda Familiar:</strong> ${paciente.renda_familiar}</p>
            <p><strong>Residência:</strong> ${paciente.residencia}</p>
            <p><strong>Matriculado:</strong> ${paciente.matriculado}</p>
            <p><strong>Mediador:</strong> ${paciente.mediador}</p>
            <p><strong>Série:</strong> ${paciente.serie}</p>
            <p><strong>Escola:</strong> ${paciente.escola}</p>
            <p><strong>Nome da Escola:</strong> ${paciente.nome_escola}</p>
            <p><strong>Turno:</strong> ${paciente.turno}</p>
            <p><strong>Fisioterapia:</strong> ${paciente.fisioterapia}</p>
            <p><strong>Pintura:</strong> ${paciente.pintura}</p>
            <p><strong>Música:</strong> ${paciente.musica}</p>
            <p><strong>Hidroterapia:</strong> ${paciente.hidroterapia}</p>
            <p><strong>Informática:</strong> ${paciente.informatica}</p>
            <p><strong>Terapia Ocupacional:</strong> ${paciente.terapia_ocupacional}</p>
            <p><strong>Fonoaudiologia:</strong> ${paciente.fonoaudiologia}</p>
            <p><strong>Psicologia:</strong> ${paciente.psicologia}</p>
        `;

        detailCard.style.display = 'block';
    }

    // Função para fechar o card de detalhes
    window.closeDetails = function () {
        const detailCard = document.getElementById("detail-card");
        detailCard.style.display = 'none';
    }
});
