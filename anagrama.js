// EJERCICIO ANAGRAMAS (dos palabras que utilizan las mismas letras para en orden diferente)

const palabra1 = "amor";
const palabra2 = "ramo";

//Queremos este mensaje de salida: 'las palabras son anagramas'
//y por otro lado si no lo son, que muestre 'las palabras no son anagramas'

//PRIMER PASO SEPARAR, ORDENAR Y UNIR DE NUEVO
let comparar = palabra1.split("").sort().join("")
console.log(comparar);
let comparar2 = palabra2.split("").sort().join("")
console.log(comparar2);

//SEGUNDO PASO MONTAR UNA FORMA DE COMPARARLAS
if(comparar == comparar2) {
    console.log(`Las palabras ${palabra1} y ${palabra2} son anagramas`)
    } else {
        console.log(`Las palabras ${palabra1} y ${palabra2} no son anagramas`)
    }


