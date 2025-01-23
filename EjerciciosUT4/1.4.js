// Escribe una función filtrar que reciba un arreglo y un callback.
// La función debe devolver un nuevo arreglo con los elementos que cumplan la condición definida en el callback.

let numeros = [1, 2, 3, 4, 5, 6]

// Funcion que pasa todos los elementos del array por el callback
function filtrar(array, callback){
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i])
        }
    }
    return result;
}

// El callback devuelve el numero si es mayor de 3
let filtrado = filtrar(numeros, function(num){ return num > 3 })

console.log(filtrado)