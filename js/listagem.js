document.addEventListener('DOMContentLoaded', () => {
    loadPacientes();

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
            // Adicione a funcionalidade para o botão Editar se necessário
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

    function deletePaciente(index) {
        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        pacientes.splice(index, 1);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        loadPacientes();
    }

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

    window.closeDetails = function () {
        const detailCard = document.getElementById("detail-card");
        detailCard.style.display = 'none';
    }
});
