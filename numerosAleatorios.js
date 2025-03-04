const numero = [];

for(let i = 0; i < 101; i++){
    numero[i] = Math.floor(Math.random() * 101);
}

const numerosPares = numero.filter((numero)=> {
    if(numero%2 === 0){
        return numero;
    }
});

const numerosImpares = numero.filter((numero)=> {
    if(numero%2 !== 0){
        return numero;
    }
});

const maiorQueDez = numero.filter((numero) => numero > 10);

console.log(numerosPares);
console.log("------------------------------");
console.log(numerosImpares);
console.log("------------------------------");
console.log(maiorQueDez);