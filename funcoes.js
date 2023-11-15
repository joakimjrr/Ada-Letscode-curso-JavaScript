// FUNÇÕES

// DEFINIÇÃO DE FUNÇÃO
function saudacao (){
    console.log ("Olá, seja bem vindo!")
}

saudacao()
console.clear()

// COMO ENVIAR PARAMENTROS PARA A FUNÇÃO

function saudacao(nome, curso) {
    console.log(`Olá, ${nome}! Seja bem-vindo ao nosso curso de ${curso}!`)
}
    saudacao('Joaquim', 'HTML e CSS')

    console.clear()
    
    // RETORNO DA FUNÇÃO

    function soma(num1, num2) {
        return num1 + num2
    }
    
    const resultado = soma (10,20)
    console.log(resultado)

    console.clear()

    function maiorDoQue50(numero) {
       if (numero > 50) {
        return true
       }
       return false
    }

