window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function nome1(){
    let nome = document.getElementById("equipe1").value;

    if (nome != "") {
        document.getElementById("texto").innerHTML = "Equipe: " + nome;
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

var count = 0;
var btn = document.getElementById("1");
var btn2 = document.getElementById("3");
var btn3 = document.getElementById("6");
var btn4 = document.getElementById("12");
let pontos = document.getElementById("resul1");
let pontos2 = document.getElementById("resul2");
  
btn.onclick = function () {
    let adiciona = count + 1;
    pontos.textContent = adiciona;
}
btn2.onclick = function () {
    let adiciona = botao + 3;
    pontos.textContent = adiciona;
}


