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