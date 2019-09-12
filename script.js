// let filmes = ['star wars', 'shazam','star trek','sharknado','bacurau'];
//  let i =0;
//  while(i<filmes.length){
//      console.log(filmes[i]);
//      i++; //incremento
//  }

//  //for(inicio;filmes;passo){
//  //    codigo a ser executado caso seja verdade}

//  //exemplo usando for
 
// console.log ("FOR")
//  for(let j = 0; j<filmes.length; j++){
//      console.log(filmes[j]);
//     }

//     //for in
//     //aqui a variavel indice assume o papel de posição da lista, ou seja, em numeros. 
// console.log("for in")
//     for(let indice in filmes){
//         console.log(indice);
//     }

//     //for of
//     //Aqui ele retorna o elemento em si, o nome. 
// console.log("For of")
//     for (let filme of filmes){ //aqui ele ja percorre por toda a lista, sem precisar de incremento
//         console.log (filme)
//     }

  
  
    //exercicio

    let film =[
        {titulo:"invocação do mal", classificacao:16},
        {titulo: "sharkboy e lavagirl", classificacao:0},
        {titulo: "senhor dos aneis", classificacao:12},
        {titulo: "ninja assassino",classificacao:18}
    ]

    //pedir a idade do usuario
    //mostrar filmes q ele pode assistir



    let idade = Number(prompt("digite sua idade"));
while(idade <0 || isNaN(idade)){ //sao duas condições na mesma linha, usando o || que significa "or" "ou". isNanN, o isNaN sign. Not a number (nao é um numero)
    alert("idade invalida. por favor digite novamente");
    idade =Number(prompt("qual a sua idade?"));
}
for(let films of film){
    if (idade >= films.classificacao){
        console.log(films.titulo);
    }
}
    


    