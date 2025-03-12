const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somarTodos = numeros.reduce((acumulador, valorAtual)=> {
    return acumulador + valorAtual;
}, 0);

const multiplicarTodos = numeros.reduce((acumulador, valorAtual) =>{
    return acumulador * valorAtual;
}, 1);

const media = numeros.reduce((acumulador, valorAtual, index)=>{
    acumulador += valorAtual;
    if(numeros.length === index+1){
        return acumulador/numeros.length;
    }
    return acumulador;
}, 0);

console.log("Soma:");
console.log("Resultado: ", somarTodos);
console.log("Multiplicação:");
console.log("Resultado: ", multiplicarTodos);
console.log("Média::");
console.log("Resultado: ", media);

//Complexidade assintótica: O(3n + 6)