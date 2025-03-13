/*
Dado un numero:
const numero = 12

Indicar si es primo o no
    --Si lo es: "El numero X es primo"
    --Si no lo es: "EL numero X no es primo"

Un numero primo es un número entero que solo es divisible por si mismo o 1
Por defecto, ni 0 ni 1 se consideran números primos
El primer número primo es 2
*/

//1- DEFINIMOS LA CONSTANTE (si cambiamos el número, cambiará la respuesta)
const numero = 11 
//LE INDICAMOS QUE ESPRIMO SEA EL TRUE 
let esPrimo = true

//2- NECESITAMOS CONSIDERAR TODAS LAS VARIABLES ANTES DE LLEGAR A ESA CONSTANTE QUE HEMOS DEFINIDO, por eso usamos "<"
//DEFINIMOS LA ITERACION INICIAL COMO 2 (porque ni 0 ni 1 son primos, y todos los numeros son divisibles x ellos)
//DEFINIMOS LA ITERACION FINAL COMO TODOS LOS NUMEROS MENORES A LA CONSTANTE
//DEFINIMOS QUE LOS NUMEROS AUMENTEN DE 1 en 1
for (let i = 2; i < numero; i++) {
    //SI LA CONSTANTE DIVIDA ENTRE LAS ITERACIONES DA UN RESTO CON VALOR 0:
    if (numero % i == 0) {
        //LA CONSOLA MUESTRA EL MENSAJE DE QUE NO ES PRIMO Y CONFIRMA QUE NO SE CUMPLE ESPRIMO
        console.log(`El número ${numero} no es primo`);
        esPrimo = false
        //LE PONEMOS UN BREAK PARA QUE ENTIENDA QUE LA OPERACION ES OTRA
        break
    }

}  
//DEFINIMOS QUE SI ESPRIMO SE CUMPLE, MUESTRE EL MENSAJE DE QUE SI LO ES
    if (esPrimo) {
    console.log(`El número ${numero} es primo`)
    }
