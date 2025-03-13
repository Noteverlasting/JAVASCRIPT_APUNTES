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
console.log(suma);

suma2 = 0
for (let i = 0 ; i < arrayNumeros2.length ; i++){
    suma2 += arrayNumeros2[i]
}
console.log(suma2);

console.log(suma + suma2);


// 2) Mostrar por consola el promedio (suma dividida entre tantos numeros como hay)

    console.log(suma / arrayNumeros1.length);
    console.log(suma2 / arrayNumeros2.length);


// 3) Encontrar los valores máximo y mínimo
let menor = 0
let mayor = 0

menor = arrayNumeros1[0]
for (let i = 0 ; i < arrayNumeros1.length ; i++) {
    if (arrayNumeros1[i] < menor) {
        menor = arrayNumeros1[i]
        console.log(menor);
    }
  
    
    
}

// 4) Sumar los valores con índice par y restar los impares
let sumando = 0
for (let i = 0 ; i < arrayNumeros1.length; i++ ){
    if (i % 2 == 0) {
    console.log (sumando += arrayNumeros1[0]);  
} else {
    console.log(sumando -= arrayNumeros1[0]);
}
}


// Hay que mostrar por consola cada resultado

// ====================================================================================================

// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.


// 6) Lo mismo para el texto más corto.


// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.


// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

// ====================================================================================================

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

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

// Después añade otro articulo al array anterior y muestra de nuevo el mensaje informativo con los nuevos datos.