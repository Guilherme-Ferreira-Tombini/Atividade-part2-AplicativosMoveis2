window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    };   
};

var btn = document.getElementById("1");
var btn2 = document.getElementById("3");
var btn3 = document.getElementById("6");
var btn4 = document.getElementById("12");
var btn5 = document.getElementById("btn1");
var btn6 = document.getElementById("btn2");
var btn7 = document.getElementById("btn3");
var btn8 = document.getElementById("btn4");

let pontos = document.getElementById("resul1");
let pontos2 = document.getElementById("resul2");

function nome1(){
    let nome = document.getElementById("equipe1").value;
    if (nome != "") {
        document.getElementById("texto").innerHTML = "Equipe: " + nome;
    } else{
        document.getElementById("texto").innerHTML = "Porfavor, insira o nome da equipe!!"
    }
}

function nome2(){
    let nome3 = document.getElementById("equipe2").value;
    if (nome3 != "") {
        document.getElementById("texto2").innerHTML = "Equipe: " + nome3;
    } else{
        document.getElementById("texto2").innerHTML = "Porfavor, insira o nome da equipe!!"
    }
}

function limpar(){
    let nome = document.getElementById("equipe1");
    let texto =  document.getElementById("texto");
    let pontos = document.getElementById("resul1");
    let vitoria = document.getElementById("vitorias1");
    let text = document.getElementById("v_equipe");
    nome.value = "";
    texto.innerHTML = "";
    pontos.textContent = 0;
    vitoria.textContent = 0;
    text.textContent = "";
}

function limpar2(){
    let nome = document.getElementById("equipe2");
    let texto =  document.getElementById("texto2");
    let pontos = document.getElementById("resul2");
    let vitoria = document.getElementById("vitorias2");
    let text = document.getElementById("v_equipe");
    nome.value = "";
    texto.innerHTML = "";
    pontos.textContent = 0;
    vitoria.textContent = 0;
    text.textContent = "";
}

function limpar_1(){
    let pontos = document.getElementById("resul1");
    let vitoria = document.getElementById("vitorias1");
    let text = document.getElementById("v_equipe");
    pontos.textContent = 0;
    text.textContent = "";
}

function limpar_2(){
    let pontos = document.getElementById("resul2");
    let vitoria = document.getElementById("vitorias2");
    let text = document.getElementById("v_equipe2");
    pontos.textContent = 0;
    text.textContent = "";
}

btn.onclick = function () {
    let adiciona = parseInt(pontos.textContent) + 1;
    pontos.textContent = adiciona;
    vitoria_equi();
}

btn2.onclick = function () {
    let adiciona = parseInt(pontos.textContent) + 3;
    pontos.textContent = adiciona;
    vitoria_equi();
}

btn3.onclick = function () {
    let adiciona = parseInt(pontos.textContent) + 6;
    pontos.textContent = adiciona;
    vitoria_equi();
}

btn4.onclick = function () {
    let adiciona = parseInt(pontos.textContent) + 12;
    pontos.textContent = adiciona;
    vitoria_equi();
}

btn5.onclick = function () {
    let adiciona = parseInt(pontos2.textContent) + 1;
    pontos2.textContent = adiciona;
    vitoria_equi();
}

btn6.onclick = function () {
    let adiciona = parseInt(pontos2.textContent) + 3;
    pontos2.textContent = adiciona;
    vitoria_equi();
}

btn7.onclick = function () {
    let adiciona = parseInt(pontos2.textContent) + 6;
    pontos2.textContent = adiciona;
    vitoria_equi();
}

btn8.onclick = function () {
    let adiciona = parseInt(pontos2.textContent) + 12;
    pontos2.textContent = adiciona;
    vitoria_equi();
}

function vitoria_equi(){
    let nome = document.getElementById("equipe1").value;
    let nome2 = document.getElementById("equipe2").value;
    let vitoria1 = document.getElementById("vitorias1");
    let vitoria2 = document.getElementById("vitorias2");
    
    
    if(parseInt(pontos.textContent) >= 12){
        vitoria1.textContent++;
        document.getElementById("v_equipe").innerHTML = "Parabens equipe " + nome + " !!";
    }else if(parseInt(pontos2.textContent) >= 12){
        vitoria2.textContent++;
        document.getElementById("v_equipe2").innerHTML = "Parabens equipe " + nome2 + " !!";
    }
}

