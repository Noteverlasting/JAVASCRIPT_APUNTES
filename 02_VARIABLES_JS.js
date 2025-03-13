//Variables
//se crean con una palabra reservada. Pueden ser: var, let o const

// var <-- la variable será global (en cualquier parte del código será accesible)
var variable1 = 12
//
var variable1 = "otra"


// let <-- la variable tiene un ámbito o alcance (scope) de aplicación (solo existe dentro de donde la creemos)

//si la variable let estuviese fuera del if, si que la encuentra

let fruta = "manzana"
if (true) {
    let fruta = "pera"
}

console.log(fruta);


//const <-- la variable es una constante, que no se puede variar

const PI = 3.1416
PI = 5.67 // Esto no se puede hacer

//otra opcion es no poner ninguna palabra reservada

bebida = "leche"  //TOTALMENTE DESACONSEJADO
