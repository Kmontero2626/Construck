function validarRegistro() {
    let nombreDeUsuario = document.getElementById("nombre").value;
    console.log(nombreDeUsuario);
    let email = document.getElementById("email").value;
    console.log(email);
    let number = document.getElementById("number").value;
    console.log(number);
    let ciudad = document.getElementById("ciudad").value;
    console.log(ciudad);
    let password = document.getElementById("password").value;
    console.log(password);
    if (nombreDeUsuario == "" || email == "" || number == "" || ciudad == "" || password == "") {
        alert("Campos sin diligenciar");
    }
}