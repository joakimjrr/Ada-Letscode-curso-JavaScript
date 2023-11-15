// LAÇOS CONDICIONAIS

const input = require("readline-sync")

const numero_sorteado = 2;

let numero = Number ( input.question ("Qual numero voce escolhe? "))

while (numero !== numero_sorteado) {
    console.log("Você errou o numero. Tente novamente ... ")

    Number ( input.question ("Qual numero voce escolhe? "))
}

console.log("Parabéns, você acertou o número!")