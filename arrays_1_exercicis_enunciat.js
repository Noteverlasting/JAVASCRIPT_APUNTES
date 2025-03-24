// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna función matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores

let suma = 0
for (let i = 0 ; i < arrayNumeros1.length ; i++){
    suma += arrayNumeros1[i]
}
console.log(`La suma de todos los valores de arrayNumeros1 es ${suma}`);

suma2 = 0
for (let i = 0 ; i < arrayNumeros2.length ; i++){
    suma2 += arrayNumeros2[i]
}
console.log(`La suma de todos los valores de arrayNumeros2 es ${suma2}`);

console.log(`La suma de todos los valores de los dos arrays es ${suma + suma2}`);


// 2) Mostrar por consola el promedio (suma dividida entre tantos numeros como hay)

console.log(`El promedio de arrayNumeros1 es ${suma / arrayNumeros1.length}`);
console.log(`El promedio de arrayNumeros2 es ${suma2 / arrayNumeros2.length}`);


// 3) Encontrar los valores máximo y mínimo

//Creamos dos variables para poder hacer comparaciones, que tienen el valor del primer item de arrayNumeros1
let minimo = arrayNumeros1[0];
let maximo = arrayNumeros1[0];


for (let i = 0 ; i < arrayNumeros1.length ; i++) {
    if (arrayNumeros1[i] < minimo) {
    //Estamos verificando si el valor del item es menor que el valor de la variable minimo
        minimo = arrayNumeros1[i]
        //Si es asi, le asignamos a minimo el valor del item de arrayNumeros1
    }     
}

for (let i = 0 ; i < arrayNumeros1.length ; i++) {
    if (arrayNumeros1[i] > maximo) {
        //Estamos verificando si el valor del item es mayor que el valor de la variable maximo
        maximo = arrayNumeros1[i];
        //Si es asi, le asignamos a maximo el valor del item de arrayNumeros1
    } 
}


console.log(`El valor mínimo de arrayNumeros1 es ${minimo}`);
console.log(`El valor máximo arrayNumeros1 es ${maximo}`);


// 4) Sumar los valores con índice par y restar los impares
let sumando = 0
for (let i = 0 ; i < arrayNumeros1.length; i++ ){
    if (i % 2 == 0) {   
 // Estamos verificando si la POSICION del indice entre dos da como resto 0 al dividirla entre 2, es decir, si su posicion es par
 // si nos quisiesemos referir al VALOR, el if deberia ser  "if (arrayNumeros1[i] % 2 == 0)"
        sumando += arrayNumeros1[i]  
    } else {
        sumando -= arrayNumeros1[i]
    }
}
console.log(`El resultado de sumar los valores con indice par y restar los de indice impar es ${sumando}`);

// Hay que mostrar por consola cada resultado

// ====================================================================================================

// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie", "JoseLuis"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.

let varTextoMasLargo = ""
let arrayTextosMasLargos = []

for ( i = 0 ; i < arrayNombres2.length ; i++){
    if ( arrayNombres2[i].length > varTextoMasLargo.length ) {
// Estamos verificando si la longitud de los valores de los items de arrayNombres2 es mayor que la longitud de varTextoMasLargo
        varTextoMasLargo = arrayNombres2[i]
        //Si es asi, el valor de varTextoMasLargo pasa a ser el valor de item de arrayNombres2 que ha pasado el "filtro"
        arrayTextosMasLargos = [arrayNombres2[i]]
        //Y pedimos que haga lo mismo con los valores dentro del array arrayTextosMasLargos
    } else if ( arrayNombres2[i].length === varTextoMasLargo.length ){
// Si no se cumple esa condicion, la nueva condición es que si la longitud de los valores de los items de arrayNombres2 es estrictamente igual a la longitud de varTextoMaslargo
        arrayTextosMasLargos.push(arrayNombres2[i])
        //Si es así, hacemos un push (introducimos en el array) de ese valor dentro de arrayTextosMasLargos

    }
}

console.log(`El nombre con el texto más largo es ${varTextoMasLargo}`)
console.log(`Los nombres con el texto más largo son ${arrayTextosMasLargos}`)
// 6) Lo mismo para el texto más corto.

//Creamos la variable varTextoMasCorto con el valor del primer item de arrayNombres para poder comparar, ya que vamos a ir descendiendo y no podemos partir de 0.
let varTextoMasCorto = (arrayNombres2[0])
console.log(varTextoMasCorto)
let arrayTextosMasCortos = []

//Realizamos el mismo bucle for, pero cambiando los valores > a <.
for ( i = 0 ; i < arrayNombres2.length ; i++ ){
    if ( arrayNombres2[i].length < varTextoMasCorto.length ) {
        varTextoMasCorto = arrayNombres2[i]
        arrayTextosMasCortos = [arrayNombres2[i]]
    } else if (arrayNombres2[i].length === varTextoMasCorto.length) {       
        arrayTextosMasCortos.push(arrayNombres2[i])
    }
}

console.log(`El nombre con el texto más corto es ${varTextoMasCorto}`);
console.log(`Los nombres con el texto más corto son ${arrayTextosMasCortos}`);
// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.

const longitudNombres = []

for (let i = 0; i < arrayNombres2.length; i++) {
    longitudNombres.push(arrayNombres2[i].length);
    //Estamos indicando que meta en la lista las longitudes de cada elemento dentro de la lista arrayNombres2
    //como "length" devuelve un valor numerico, no tenemos que realizar ninguna conversión

}

console.log(`Las longitudes de los strings dentro de arrayNombres2 son ${longitudNombres}`);
// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

const arrayNombresConI =  []

for (nombres of arrayNombres2){
    if (nombres.toLowerCase().includes("i")) {
        // Verificamos si en los nombres pasados a minúscula, se incluye la letra "i" 
        arrayNombresConI.push(nombres);
        //Si es así, añadimos a arrayNombresConI el valor.
    }
}

console.log(`Los nombres dentro de arrayNombres2 que contienen la letra i son ${arrayNombresConI}`);

// ====================================================================================================

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

const arrayBidimensional = [];

for (let i = 0; i < arrayMixto.length; i++) {
    if (i % 2 == 0) {
    //Si se cumple que el indice es par:
    arrayBidimensional.push([arrayMixto[i], arrayMixto[i + 1]]);
    //Agrupamos cada par de elementos (nombre y número) en el arrayBidimensional
}
}
console.log(arrayBidimensional);


// ====================================================================================================

// 10) Este array incluye una operación de compra:
const compra = [
    ["Leche", 1.2, 2],
    ["Pan", 0.8, 3],
    ["Huevos", 2.5, 1],
    ["Café", 5.2, 0.5]
]
// Se muestra el nombre del artículo, su precio y la cantidad comprada.
// Debes obtener la cantidad de artículos comprados (no de cada tipo) y el importe total.
// Por ejemplo: "Has comprado 4 artículos y el importe total es de 12.7 euros"


let cantidadArt = 0;
let importeTotal = 0;

    // Recorremos el array compra con un bucle for
for (let i = 0; i < compra.length; i++) {
    cantidadArt += compra[i][2] 
    // variamos cantidadArt para que sume los elementos del indice 2 (cantidad) del array que contiene el array compra  al valor (que era 0)
    console.log(cantidadArt);
    importeTotal += compra[i][1] * compra[i][2] 
    // variamos importeTotal para que añada los valores del índice 1 (precio) * índice 2(cantidad) del array que contiene el array compra
    console.log(importeTotal);
}

console.log(`Has comprado ${cantidadArt} artículos y el importe total es de ${importeTotal.toFixed(2)} euros.`);


// Después añade otro articulo al array anterior y muestra de nuevo el mensaje informativo con los nuevos datos.

compra.push(["Mantequilla", 1.65, 1]);

    // Recalculamos los totales después de añadir el nuevo artículo
cantidadArt = 0;
importeTotal = 0;

    //volvemos a realizar el bucle for
for (let i = 0; i < compra.length; i++) {
    cantidadArt += compra[i][2];
    importeTotal += compra[i][1] * compra[i][2];
}

console.log(`Has comprado ${cantidadArt} artículos y el importe total es de ${importeTotal.toFixed(2)} euros.`);