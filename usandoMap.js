const numero = [];

for(let i = 0; i < 101; i++){
    numero[i] = Math.floor(Math.random() * 100);
}

const multiplicadosPorDois = numero.map(miltiplicar);

function miltiplicar(numero) {
    return numero * 2;
}

const divididosPorDois = numero.map(dividir);

function dividir(numero) {
    return numero / 2;
}

console.log(numero);
console.log("----------------------------");
console.log(multiplicadosPorDois);
console.log("----------------------------");
console.log(divididosPorDois);