const img = document.getElementById('imagem');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;



//criando um arrow
const trafficLight = (event) => {
    stopAutomatic();
//pegando o evento, onde clicou e seu id,  que está sendo disparado dendo do objeto pai
    turnOn[event.target.id]();
    
}

//botão automatico próximo index depois zera.
const nextIndex = () => {
    if (colorIndex < 2){
    colorIndex++ } else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();

}

const stopAutomatic = () => {
    clearInterval(intervalId)
}


//criando um objeto para ficar mais simples de chamar as funções.
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow' : () => img.src = 'img/amarelo.png',
    'green' : () => img.src = 'img/verde.png',

    //intervalo do evento a cada x milissegundos
    'automatic' : () => intervalId = setInterval( changeColor, 1000)

}


//criando uma lista de evento para o clique do botão
buttons.addEventListener('click', trafficLight);