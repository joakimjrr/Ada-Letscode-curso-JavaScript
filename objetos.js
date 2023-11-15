// OBJETOS  

// COMO CRIAR UM OBJETO NO JAVASCRIPT

let pessoa = {
    nome: "Junior",
    idade: 27,
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa.idade)

// COMO ADICIONAR UM PAR DE CHAVE-VALOR?

pessoa.altura = 1.91
console.log(pessoa)


// COMO REMOVER UM PAR CHAVE-VALOR?

delete pessoa.altura
console.log(pessoa)

console.clear()
// COMO PERCORRER?

for ( let chave in pessoa) {
    console.log(chave)
}