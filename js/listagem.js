function loadUsers() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userList = document.getElementById("userList");

    userList.innerHTML = "";

    users.forEach((user, index) => {
        var row = document.createElement("tr");

        var nomeCell = document.createElement("td");
        nomeCell.textContent = user.firstname;
        row.appendChild(nomeCell);

        var sobrenomeCell = document.createElement("td");
        sobrenomeCell.textContent = user.lastname;
        row.appendChild(sobrenomeCell);

        var emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        var actionsCell = document.createElement("td");

        var editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.onclick = function () {
            editUser(index);
        };
        actionsCell.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = function () {
            deleteUser(index);
        };
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        userList.appendChild(row);
    });
}

function editUser(index) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users[index];

    var firstname = prompt("Digite o novo nome:", user.firstname);
    var lastname = prompt("Digite o novo sobrenome:", user.lastname);
    var email = prompt("Digite o novo email:", user.email);
    var password = prompt("Digite a nova senha:", user.password);

    if (firstname && lastname && email && password) {
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.password = password;

        users[index] = user;
        localStorage.setItem("users", JSON.stringify(users));
        loadUsers();
    }
}

function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    if (confirm("Você tem certeza que deseja excluir este usuário?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        loadUsers();
    }
}

window.onload = function () {
    loadUsers();
};


