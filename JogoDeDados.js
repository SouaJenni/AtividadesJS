let jogador1;
let jogador2;
do{
    jogador1 = Math.floor(Math.random() * (+6 + 1 - +1)) + +1;
    jogador2 = Math.floor(Math.random() * (+6 + 1 - +1)) + +1;
    console.log("Jogador 1 tirou: ", jogador1);
    console.log("Jogador 2 tirou: ", jogador2);

    if(jogador1 > jogador2){
        console.log("Jogador 1 venceu!");
    }else if(jogador2 > jogador1){
        console.log( "Jogador 2 venceu!");
    }else{
        console.log("Empate, joguem novamente!\n");
    }
}while(jogador1 === jogador2);

// Complexidade assintótica: O(log n), pois mesmo com mais opções de números não
// é garantido que o loop passará por todos, então ele cresce mais lentamente