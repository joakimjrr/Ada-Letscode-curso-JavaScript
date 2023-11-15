// COERÇÃO DE TIPOS

// COERÇÃO EXPLÍCITA ( MANUAL)
    const numero = 10;
    console.log(numero, typeof numero)

    const numeroEmFormatoDeString = String (numero)
    console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

    console.log(Number("1234567890"))
    console.log(parseFloat  ("1234567890"))

    console.clear()

// COERÇÃO IMPLÍCITA ( AUTOMÁTICA )

//CONTATENAR

console.log( 100 + "1")
console.log('10' - 1)
console.log ("10" * 3)

let n = 1 + "1"
n = n - 1
console.log(n)

console.log( 2 + 3 + 4 + "5")

console.log ("5" + 2 + 3 + 4)

console.log ( "10" - "4" - "3" - 2 + "5")

