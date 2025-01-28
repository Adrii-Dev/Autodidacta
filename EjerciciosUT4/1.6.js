// Escribe una función temporizador que reciba un intervalo en segundos y un callback. 
// La función debe ejecutar el callback cada intervalo, deteniéndose automáticamente después de 5 ejecuciones.

// Funcion que repite saludar() 5 veces en espacio de tiempo que le demos
function temporizador(tiempo, callback){
    let contador = 0
    const repetir = setInterval(() => {
        callback()
        contador++
        if(contador >= 5){
            clearInterval(repetir)
        }
    },tiempo)
}

temporizador(2000, () =>{
    console.log("Hola")
})