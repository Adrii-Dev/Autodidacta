// Crea una función procesarDatos que reciba un número, lo multiplique por 2 y pase el resultado a un callback.
// Luego, escribe una función que use procesarDatos para procesar un número tres veces (encadenando callbacks) y muestre el resultado final.

// Función que procesa los datos
function procesarDatos(numero, callback) {
    const resultado = numero * 2;
    callback(resultado);
}

// Función que usa procesarDatos para procesar un número tres veces
function procesarTresVeces(numero) {
    procesarDatos(numero, function(resultado1) {
        procesarDatos(resultado1, function(resultado2) {
            procesarDatos(resultado2, function(resultado3) {
                console.log('Resultado final:', resultado3);
            });
        });
    });
}

procesarTresVeces(5);