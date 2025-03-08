function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 3);
}

function escolha(opcao){
    if(opcao === 0){
        return "Pedra";
    }else if(opcao === 1){
        return "Papel";
    }else{
        return "Tesoura";
    }
}

function definirVencedor(jogador, computador){
    if((jogador === 0 && computador === 2) || (jogador === 2 && computador === 1) || (jogador === 1 && computador === 0)){
        return "Jogador venceu!";
    }else if(jogador === computador){
        return "Empate";
    }else{
        return "Computador venceu!";
    }
}

const jogadorEscolhe = gerarNumeroAleatorio();
const computadorEscolhe = gerarNumeroAleatorio();

console.log("A escolha do jogador foi: " , escolha(jogadorEscolhe));
console.log("A escolha do computador foi: ", escolha(computadorEscolhe));

console.log(definirVencedor(jogadorEscolhe, computadorEscolhe));

//Complexidade assintótica: O(log n), mesmo com mais opções não perderia tanta eficiência