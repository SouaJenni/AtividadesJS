const numeros = [];

for(let i = 0; i <= 100; i++){
    numeros[i] = Math.floor(Math.random() * 101);
}

const multiplicadosPorDois = numeros.map(miltiplicar);

function miltiplicar(numeros) {
    return numeros * 2;
}

const divididosPorDois = numeros.map(dividir);

function dividir(numeros) {
    return numeros / 2;
}

console.log("Números aleatórios: ");
console.log(numeros);
console.log("----------------------------");
console.log("Números x2: ");
console.log(multiplicadosPorDois);
console.log("----------------------------");
console.log("Números /2: ");
console.log(divididosPorDois);

//Complexidade assintótica: O(3n) -> aproximadamente O(n)