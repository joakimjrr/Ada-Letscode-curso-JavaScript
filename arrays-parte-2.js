// ARRAYS PARTE 2 - METODOS DE ARRAY

let arr1 = [ 30, 12, 45, 34, 29]
let arr2 = []
// FATIAMENTO: SLICE

console.log(arr1.slice(0,2))
console.log(arr1.slice(2))
console.clear()
// ADICIONANDO ELEMENTOS : PUSH -> Final do array | UNSHIFT -> inicio do array

console.log ("Antes de adicionar: ", arr2)

arr2.push(10,20,30)
arr2.push(40)

console.log("Depois de adicionar: ", arr2)

arr2.unshift(0)

console.log("Depois de adicionar com unsshift: ", arr2)
console.clear()

// REMOVENDO ELEMENTOS: POP -> remove o ultimo elemento do array | SHIFT -> remover o primeiro elemento

console.log("Antes de remover com pop: ", arr2)

const elementoRemovido = arr2.pop()

console.log("Depois de remover com pop: ", arr2)
console.log("O elemento removido foi: ", elementoRemovido)


console.log("Antes de remover com shift: ", arr2)

const elementoRemovido2 = arr2.shift()

console.log("Depois de remover com shift: ", arr2)
console.log("O elemento removido foi: ", elementoRemovido2)

console.clear()
// CONCATENANDO ARRAYS: CONCAT

console.log("arr1",arr1)
console.log("Arr2", arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat (arr1))

console.clear()

// BUSCANDO ELEMENTOS: INDEXOF | LASTINDEXOF

console.log(arr1)

let indiceDoNumero34 = arr1.indexOf(34)
console.log(indiceDoNumero34)

let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3))
console.clear()

// DESCOBRINDO A EXISTÊNCIA DE UM ELEMENTO : INCLUDES

console.log(arr1)
console.log(arr1.includes(12))
console.clear()

// INVERTENDO ARRAYS: REVERSE

console.log("arr1 normal: ", arr1)

const arr1Invertido = arr1.reverse()

console.log ("arr1 invertido: ", arr1Invertido)
