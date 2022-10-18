
function validateAffair() {                // Para validar el campo asunto
    var expRegAffair = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var affair = document.getElementById("affair");
    if (!expRegAffair.exec(affair.value)) {
        alert("El asunto solo puede recibir letras");
        document.getElementById("affair").value = ""; // limpia el campo en caso se ingrese números
    }
}

function validateName() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("name");
    if (!expRegName.exec(productName.value)) {
        alert("El nombre solo puede recibir letras");
        document.getElementById("name").value = ""; // limpia el campo en caso se ingrese números

    }
}

function validatenameProduct() {
    var expRegnameProduct = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productnameProduct = document.getElementById("nameProduct");
    if (!expRegnameProduct.exec(productnameProduct.value)) {
        alert("El nombre del producto solo puede recibir letras");
        document.getElementById("nameProduct").value = ""; // limpia el campo en caso se ingrese números

    }
}

function validateLastName() {
    var expRegLastName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var lastName = document.getElementById("lastName");
    if (!expRegLastName.exec(lastName.value)) {
        alert("El apellido solo puede contener letras");
        document.getElementById("lastName").value = ""; // limpia el campo en caso se ingrese números

    }
}

function validateNameClient() {
    var expRegNameClient = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var nameClient = document.getElementById("nameClient");
    if (!expRegNameClient.exec(nameClient.value)) {
        alert("El nombre del cliente solo puede contener letras");
        document.getElementById("nameClient").value = ""; // limpia el campo en caso se ingrese números
    }
}

function validateMessage() {
    var expRegMessage = /^[A-Za-z0-9\s]+$/;
    var message = document.getElementById("message");
    if (!expRegMessage.exec(message.value)) {
        alert("El mensaje solo puede recibir letras y números");
        document.getElementById("message").value = ""; // limpia el campo en caso no se ingrese letras o números

    }
}

function validateSuggestion() {
    var expRegSuggestion = /^[A-Za-z0-9\s]+$/;
    var suggestion = document.getElementById("suggestion");
    if (!expRegSuggestion.exec(suggestion.value)) {
        alert("La sugerencia solo puede recibir letras y números");
        document.getElementById("suggestion").value = ""; // limpia el campo en caso no se ingrese letras o números

    }
}

function validateEmail() {
    var expRegEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var email = document.getElementById("email");
    if (!expRegEmail.exec(email.value)) {
        alert("El correo ingresado no es valido");
        document.getElementById("email").value = ""; // limpia el campo en el caso que el correo electrónico no sea valido
    }
}

/*
    Empezar por el identificador o nombre del usuario ^\w+([.-_+]?\w+)*
    Seguido por el símbolo de la arroba @
    Por último, el nombre del dominio del correo \w+([.-]?\w+)*(\.\w{2,10})+$
*/

