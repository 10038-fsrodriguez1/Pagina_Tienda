function validateid() {
    var expRegid = /^[0-9]{10}$/;
    var Personid = document.getElementById("id");
    if (!expRegid.exec(Personid.value)) {
        alert("La cedula ingresada es incorrecta");
        document.getElementById("id").value = "";
        return false;

    } else {
        return true;
    }
}

function validateNamePerson() {
    var expRegNamePerson = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var PersonName = document.getElementById("nameR");
    if (!expRegNamePerson.exec(PersonName.value)) {
        alert("El nombre solo permite letras");
        document.getElementById("nameR").value = "";
        return false;

    } else {
        return true;
    }
}
function validateDirection() {
    var expRegDirection = /^[a-zA-Z0-9\_\-\s]{1,50}$/;
    var PersonDirection = document.getElementById("address");
    if (!expRegDirection.exec(PersonDirection.value)) {
        alert("La dirección no admite caracteres especiales");
        document.getElementById("address").value = "";
        return false;

    } else {
        return true;
    }
}



function validateLastName() {
    var expRegNamePerson = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var PersonName = document.getElementById("lastName");
    if (!expRegNamePerson.exec(PersonName.value)) {
        alert("El apellido solo admite letras");
        document.getElementById("lastName").value = "";
        return false;

    } else {
        return true;
    }
}

function validateNamePassword() {
    var expRegPassword = /^.{6,12}$/;
    var PersonPassword = document.getElementById("password");
    if (!expRegPassword.exec(PersonPassword.value)) {
        alert("La contraseña debe de tener de 6 a 12 dígitos");
        document.getElementById("password").value = "";
        return false;

    } else {
        return true;
    }
}


