// Ejercicio: Crea una función temporizador que reciba un número de segundos y un callback.
// La función debe esperar ese número de segundos usando setTimeout y luego ejecutar el callback para imprimir el mensaje "Tiempo completado".

// Funcion de callback para imprimir una frase
function callback(){
    console.log("Tiempo completado.")
}

// Funcion que retrasa la funcion de callback segun los segundos que le des
function temporizador(segundos, callback){
    setTimeout(callback, segundos)
}

temporizador(2000, callback)