let filmes = ['star wars', 'shazam','star trek','sharknado','bacurau'];
 let i =0;
 while(i<filmes.length){
     console.log(filmes[i]);
     i++; //incremento
 }

 //for(inicio;filmes;passo){
 //    codigo a ser executado caso seja verdade}

 //exemplo usando for
 
console.log ("FOR")
 for(let j = 0; j<filmes.length; j++){
     console.log(filmes[j]);
    }

    //for in
    //aqui a variavel indice assume o papel de posição da lista, ou seja, em numeros. 
console.log("for in")
    for(let indice in filmes){
        console.log(indice);
    }

    //for of
    //Aqui ele retorna o elemento em si, o nome. 
console.log("For of")
    for (let filme of filmes){
        console.log (filme)
    }