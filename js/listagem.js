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
        // Função para editar paciente (não implementada aqui)
        actionsCell.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = function () {
            deletePaciente(index);
        };
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        patientList.appendChild(row);
    });
}

function deletePaciente(index) {
    var pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    if (confirm("Você tem certeza que deseja excluir este paciente?")) {
        pacientes.splice(index, 1);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        loadPacientes();
    }
}

// Carrega os pacientes ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    loadPacientes();
});
