// ARRAYS 

// COMO CRIAR UM ARRAY?

let arr = ["joaquim", 27, 1.95, true]

console.log(arr)

// COMO ACESSAR OS ELEMENTOS DE UM ARRAY?

console.log("Primeiro elemento:", arr[0])
console.log("Segundo elemento:", arr [1])
console.log("Terceiro elemento:", arr[2])
console.log("Quarto elemento:", arr[3])

// COMO OBTER O TAMANHO DO ARRAY?

console.log("tamanho do array: ", arr.length)

// PERCORRENDO ARRAY

console.clear()

// TIPO 1

for ( let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.clear()

// TIPO 2 -> PERCORRE ELEMNTOS DO ARRAY

for ( let elemento of arr) {
    console.log(elemento)
}

console.clear()

// TIPO 3 -> PERCORRE OS INDICES DO ARRAY

for ( let indice in arr) {
    console.log(indice)
}

for ( let indice in arr) {
    console.log(indice, arr[indice])
}