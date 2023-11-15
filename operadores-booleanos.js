// OPERADORES BOOLEANOS 

const numero = 10

console.log ( numero == 10)
console.log ( numero > 20)

console.log ( numero == 10 )
console.log ( 10 == "10")
console.log ( 10 === "10")

//console.clear()

console.log ( 10 != 10)
console.log ( 10 != "10")
console.log ( 10 !== "10")

// CONDIÇÕES LÓGICAS 
// AND -> &&

let idade = 26;
let tenhoCNH = true

const possodirigir = idade >= 18 && tenhoCNH === true

console.log (" Posso dirigir?", possodirigir)

// OR -> || 

idade = 40;
const votoFacultativo = idade < 18 || idade >= 70

// NOT -> !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso)