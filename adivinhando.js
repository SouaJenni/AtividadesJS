const escolha = Math.floor(Math.random() * 11);
let adivinhar;

function adivinharNumero(){
    do{
        adivinhar = Math.floor(Math.random() * 11);
        console.log("Tentativas: ", adivinhar);
        if(adivinhar === escolha){
            console.log("Número escolhido: ", escolha);
            console.log("Eu acertei, seu número é: ", adivinhar);
            return;
        }
    }while (1);
}

console.log(adivinharNumero());
