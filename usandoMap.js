const numeros = [];

for(let i = 0; i < 101; i++){
    numeros[i] = Math.floor(Math.random() * 100);
}

const multiplicadosPorDois = numeros.map(miltiplicar);

function miltiplicar(numero) {
    return numero * 2;
}

const divididosPorDois = numeros.map(dividir);

function dividir(numero) {
    return numero / 2;
}

console.log("Números aleatórios: ");
console.log(numeros);
console.log("----------------------------");
console.log("Números x2: ");
console.log(multiplicadosPorDois);
console.log("----------------------------");
console.log("Números /2: ");
console.log(divididosPorDois);