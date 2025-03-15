const escolha = Math.floor(Math.random() * 11);
let adivinhar;
let tentativas = [];
let eNovo;

function adivinharNumero(){
    do{
        do{
            adivinhar = Math.floor(Math.random() * 11);
            eNovo = true;
            for(let i=0; i<tentativas.length; i++){
               if(tentativas[i] === adivinhar){
                   eNovo = false;
               }
            }
        }while (!eNovo)
        console.log("Tentativas: ", adivinhar);
        if(adivinhar === escolha){
            console.log("Número escolhido: ", escolha);
            console.log("Eu acertei, seu número é: ", adivinhar);
            return;
        }else{
            tentativas.push(adivinhar);
        }
    }while (1);
}

console.log(adivinharNumero());

//Complexidade assintótica: O Infinity