// Crea una función procesarTarea que reciba un booleano y dos callbacks: uno para éxito y otro para error.
// Si el booleano es true, llama al callback de éxito; de lo contrario, al de error.

// Funcion que te procesa un callback segun la condicion
function procesarTarea(condicion, callback1, callback2){
    if (condicion){
        callback1();
    }else{
        callback2();
    }
}

// Le pasamos a la funcion un booleano y dos callback, uno de exito y otro de error
procesarTarea(false, () => console.log("Exito"), () => { throw "Error" })