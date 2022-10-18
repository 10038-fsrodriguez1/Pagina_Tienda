var users = [
    {
        username: "allison",
        password: "123458"
    },
    {
        username: "johny",
        password: "123456"
    },
    {
        username: "carlos",
        password: "1234567"
    },
    {
        username: "danny",
        password: "12345678"
    }
]

function validateUser() {
    var user = document.getElementById("userGerister").value
    for (i = 0; i < users.length; i++) {
        if (user == users[i].username) {
            window.alert("El usuario " + user + " ya existe");
            document.getElementById("userGerister").value = "";
            return false;
        }
    }
}


function validatePassword() {
    var password = document.getElementById("password").value
    var validatepassword = document.getElementById("validatepassword").value

    if (password == validatepassword) {
        return true;
    }
    else {
        window.alert("La contraseña no coincide");
        document.getElementById("password").value = "";
        document.getElementById("validatepassword").value = "";
        return false;
    }
}