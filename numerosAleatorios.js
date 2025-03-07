const numeros = [];

for(let i = 0; i < 101; i++){
    numeros[i] = Math.floor(Math.random() * 101);
}

const numerosPares = numeros.filter((numero)=> numero%2 === 0);

const numerosImpares = numeros.filter((numero)=> numero%2 !== 0);

const maiorQueDez = numeros.filter((numero) => numero > 10);

console.log("Números pares:");
console.log(numerosPares);
console.log("------------------------------");
console.log("Números ímpares:");
console.log(numerosImpares);
console.log("------------------------------");
console.log("Números maiores que 10:");
console.log(maiorQueDez);