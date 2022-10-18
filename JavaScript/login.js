var objPeople = [
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
        username: "admin",
        password: "admin"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            window.alert("Bienvenido " + username + " !!!");
            return;
        }
    }
    window.alert("usuario y contraseña incorrectas");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}