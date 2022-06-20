function validacao() {

var email = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var usuario = document.getElementById("usuario").value;

if(email && pass && usuario === ""){
    alert("Acesso Não Definido!");
}else if(email == ""){
    alert("Campo de E-mail em Branco!");
}else if (pass == ""){
    alert("Digite a Senha!");
}

if(usuario == ""){
    alert("Digite Seu Número de Matrícula!");
}

}

