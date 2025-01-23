//  Ejercicio: Escribe una función ordenarNumeros que reciba un arreglo de números y un callback.
// La función debe ordenar los números de menor a mayor y luego llamar al callback, pasándole el arreglo ordenado.

let numeros = [3, 1, 8, 9, 2, 5, 4, 7, 6]

// Funcion que muestra el array por consola
function callback(array){
    console.log(array)
}

// Funcion para ordenar un array y mandarselo a una funcion callback
function ordenarNumeros(array, callback){
    let arrayOrdenado = array.sort((a, b) => a - b)
    callback(arrayOrdenado)
}

ordenarNumeros(numeros, callback)