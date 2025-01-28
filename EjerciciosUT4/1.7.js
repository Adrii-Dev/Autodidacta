// Crea una función generarNumeroAleatorio que reciba un rango (mínimo y máximo) y una función de callback,
// la función debe generar un número entero aleatorio dentro del rango y después procesar el número a través del callback. 
// El callback debe imprimir por consola el número generado.

function generarNumeroAleatorio(min, max, callback) {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    callback(numeroAleatorio);
}

generarNumeroAleatorio(1, 10, (numero) => {
    console.log("Número generado:", numero);
});