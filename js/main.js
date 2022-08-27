window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function nome1(){
    let nome = document.getElementById("equipe1").value;

    if (nome != "") {
        document.getElementById("texto").innerHTML = "Equipe: " + nome
    } else{
        document.getElementById("texto").innerHTML = "Porfavor, insira o nome da equipe!!"
    }
}

function nome2(){
    let nome = document.getElementById("equipe2").value;

    if (nome != "") {
        document.getElementById("texto2").innerHTML = "Equipe: " + nome
    } else{
        document.getElementById("texto2").innerHTML = "Porfavor, insira o nome da equipe!!"
    }
}

function limpar(){
    let nome = document.getElementById("equipe1");
    let texto =  document.getElementById("texto");
    nome.value = "";
    texto.innerHTML = "";
}

function limpar2(){
    let nome = document.getElementById("equipe2");
    let texto =  document.getElementById("texto2");
    nome.value = "";
    texto.innerHTML = "";
}