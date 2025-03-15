const jogador = Math.floor(Math.random() * 3);
const computador = Math.floor(Math.random() * 3);

function escolha(opcao){
    if(opcao === 0){
        return "Pedra";
    }
    if(opcao === 1){
        return "Papel";
    }
    return "Tesoura";
}

function definirVencedor(jogador, computador){
    const escolhaJogador = jogador;
    const escolhaComputador = computador;
    if(escolhaJogador === 0 && escolhaComputador === 2){
        console.log("Pedra esmaga tesoura!");
        return "Jogador venceu!";
    }
    if(escolhaJogador === 1 && escolhaComputador === 0){
        console.log("Papel embrulha pedra!");
        return "Jogador venceu!";
    }
    if(escolhaJogador === 2 && escolhaComputador === 1){
        console.log("Tesoura corta papel!");
        return "Jogador venceu!";
    }
    if(escolhaJogador === escolhaComputador){
        return "Mesma escolha, empate!";
    }
    return "O computador venceu!";
}

console.log("O jogador escolheu: ", escolha(jogador));
console.log("O computador escolheu: ", escolha(computador));
console.log(definirVencedor(jogador, computador));
