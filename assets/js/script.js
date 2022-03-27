/*
Case Sensitive = reconhece letras maiusculas e minusculas

Por tag: getElementByTagName()
por Id: getElementById()
Por nome: getElementsByName()
Por Classe: getElementsByClassName()
Por seletor: querySelector()
*/

let nome = document.getElementById("nome")
let email = document.querySelector("#email") //se fosse classe -> (".email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <= 2){
        txtNome.innerHTML = "nome inválido"
        txtNome.style.color="red"
    } else {
        txtNome.innerHTML = "nome válido"
        txtNome.style.color="green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf(".com") == -1) {
        txtEmail.innerHTML = "e-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML ="email válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "o texto deve ter no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("formulário enviado com sucesso!")
    } else {
        alert("preencha todos os campos do formulário!")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "500px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "365px"
}

