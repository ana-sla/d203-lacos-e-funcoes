// function somar(n1,n2){ //esse entre parenteses sao os paramentros da função, os elementos q ela vai receber
//     let soma: n1 + n2;
//     return soma;

function FazerEscada(material, qtdDegraus){
// let material = prompt("digite o material");
// let qtdDegraus= Number(prompt('digite a quantidade de degraus'));
let escada='';

for(let i = 0; i < qtdDegraus; i++){
    escada += material;
    console.log(escada);
}
}

function somarinfinito (){
    let somaa =0
    for(let i = 0; i<arguments.length;i++){
        somaa += arguments[i]
        return somaa;
    }
}

const gerarAleatorio= (min, max) => {
    return Math.floor(Math.random()*(max - min +1)) + min
}