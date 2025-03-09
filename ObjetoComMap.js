const pessoa = [
    {nome: "Carlos",
    idade: 34,
    altura: 1.78,
    peso: 76
    }
]

const calcularIMC = pessoa.map((pessoa) => {
    return {
        nome: pessoa.nome,
        idade: pessoa.idade,
        altura: pessoa.altura,
        peso: pessoa.peso,
        imc: pessoa.peso / (pessoa.altura * pessoa.altura)
    }
});

console.log(JSON.stringify(calcularIMC));

//Complexidade assintótica: não sei, mas provavelmente aumenta a complexidade de acordo com a(s)
//operação(s) que o código precisa fazer ou tamanho o do objeto, nesse caso, acredito ser um O(log n)