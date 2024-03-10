let corVermelho = document.getElementById('btnVermelho');
let corAmarelo = document.getElementById('btnAmarelo');
let corVerde = document.getElementById('btnVerde');
let corAuto = document.getElementById('btnAuto');
let corSemaforo = document.getElementById('semaforo');



function fechado(){
    corSemaforo.src = "img/vermelho.png";
}

function atencao(){
    corSemaforo.src = "img/amarelo.png";
}

function siga(){
    corSemaforo.src = "img/verde.png"
}

function auto(){
    
}

corVermelho.addEventListener("click", fechado);
corAmarelo.addEventListener("click", atencao);
corVerde.addEventListener("click", siga);
corAuto.addEventListener("click", auto);


