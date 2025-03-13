
// TIPOS DE VARIABLES
/* 1. Variables numéricas - Se indican sin comas ni parentesis. 
    Ejemplo: let edad = 25; // La variable edad es numérica y tiene el valor 25.*/
/* 2. Variables de texto (string) - Se indican con comillas. 
    Ejemplo: let nombre = 'Juan'; // La variable nombre es de texto y tiene el valor Juan. */
/* 3. Variables booleanas - Son true o false. 
    Ejemplo: let esMayorDeEdad = true; // La variable esMayorDeEdad es booleana y tiene el valor true. */
/* 4. Variables de objeto - Se indican con llaves. 
    Ejemplo: let persona = { nombre: 'Juan', edad: 25 }; 
    o let persona = { nombre: 'Juan', edad: 25, direccion: 'Calle 123' }; */
/* 5. Variables de arreglo - Se indican con corchetes. 
    Ejemplo: let frutas = ['Manzana', 'Plátano', 'Naranja']; // La variable frutas es de arreglo y tiene los valores Manzana, Plátano y Naranja. */
/* 6. Variables de arreglo de objetos - Se indican con corchetes y llaves. 
    Ejemplo: let personas = [{ nombre: 'Juan', edad: 25 }, { nombre: 'Pedro', edad: 30 }]; // La variable personas es de arreglo de objetos y tiene dos objetos con los valores Juan y 25 , y Pedro y 30.*/

let NombreDeLaVariable = 'Bob'; // Declara una variable llamada NombreDeLaVariable y le asigna el valor Bob.
NombreDeLaVariable;

NombreDeLaVariable = 'Steve'; // Cambia el valor de la variable NombreDeLaVariable por Steve. 
NombreDeLaVariable;

let edad = 25
let nombre = 'Juan'

let persona = { nombre: 'Juan', edad: 25 }
persona 

let frutas = ['Manzana', 'Plátano', 'Naranja']
frutas

let personas = [{ nombre: 'Juan', edad: 25 }, { nombre: 'Pedro', edad: 30 }]
personas

// TIPOS DE OPERADORES

/* 1. Operadores de suma: +, += 
*/
let sumado = 5 + 5
sumado

let BobDylan = ('Bobby' + 'Dylanguard') 
BobDylan

//+= se usa para sumar un valor a una variable .
let numero = 5;
numero +=5
numero
numero +=10
numero

// 2. Operadores de resta: -, -=
let restado = 10 - 5
restado
// -= se usa para restar un valor a una variable .
let restos = numero -= numero
restos
let restos2 = numero -= 2
restos2

// 3. Operadores de multiplicación: *, *=
let multiplicat = 5 * 2
multiplicat

// *= se usa para multiplicar un valor a una variable .
multiplicat *= multiplicat
multiplicat

// 4. Operadores de división: /, /= 
let dividido = 10 / 2
dividido
// /= se usa para dividir un valor a una variable .
let dividido2 = dividido /= dividido
dividido

/* 5. Operadores de asignación: =, +=, -=, *=, /=, %= , **=, <<=, >>=, >>>=, &=, ^=, |= 
    Ejemplo: let suma = 5; // La variable suma es igual a 5. */
    // = se usa para asignar un valor a una variable .
    // += se usa para sumar un valor a una variable .
    // -= se usa para restar un valor a una variable .
    // *= se usa para multiplicar un valor a una variable .
    // /= se usa para dividir un valor a una variable .
    // %= se usa para obtener el resto de una división entre dos números enteros.
    // **= se usa para elevar un número a una potencia.

/* 6. Operadores de igualdad o identidad: ==, ===, !, !=, !==, >, <, >=, <= 
*/
let cinco = '5'

// == se usa para comparar dos valores en valor y devuelve true si son iguales y false si no. En este caso es true porque 5 (numero) y '5'(string) son iguales en valor aunque no en tipo.
let comparacion = 5 == cinco
comparacion
// === se usa para comparar dos valores en valor y tipo y devuelve true si son iguales y false si no. En este caso es false porque 5 (numero) y '5'(string) son diferentes en tipo.
let comparacionexacta = 5 === cinco
comparacionexacta
// != se usa para comparar dos valores solo en valor y devuelve true si son diferentes y false si no. En este caso es false porque 5 (numero) y '5'(string) son iguales en valor aunque no en tipo.
let comparaciondiferente = 5 != cinco
comparaciondiferente 
// !== se usa para comparar dos valores en valor y tipo y devuelve true si son diferentes y false si no. En este caso es true porque 5 (numero) y '5'(string) son diferentes en tipo.
let comparaciondiferenteexacta = 5 !== cinco
comparaciondiferenteexacta
// ! se usa para negar un valor booleano; devuelve true si el valor es false y false si el valor es true. En este caso es true porque 5 > 5 es false.
let negacion = !(5 > 5)
negacion
// > se usa para comparar dos valores y devuelve true si el primero es mayor que el segundo y false si no. En este caso es false porque 5 es menor que 10.
let comparacionmayor = 5 > 10
comparacionmayor
// < se usa para comparar dos valores y devuelve true si el primero es menor que el segundo y false si no. En este caso es true porque 5 es menor que 10.
let comparacionmenor = 5 < 10
comparacionmenor
// >= se usa para comparar dos valores y devuelve true si el primero es mayor o igual que el segundo y false si no. En este caso es false porque 5 es menor que 10.
let comparacionmayorigual = 5 >= 10
comparacionmayorigual
// <= se usa para comparar dos valores y devuelve true si el primero es menor o igual que el segundo y false si no. En este caso es true porque 5 es menor o igual que 5.
let comparacionmenorigual = 5 <= 5
comparacionmenorigual

// 8. Operadores de exponente: **, **= 
let exponente = 5 ** 2
exponente
/* 9. Operadores de resto: %, %= 
    Ejemplo: let resto = 10 % 3; // La variable resto es igual a 1. */
/* 10. Operadores de incremento y decremento: ++, --, +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, |= 
    Ejemplo: let incremento = 5; // La variable incremento es igual a 5. */




    // TIPOS DE CONDICIONALES 

// 1. If - Si la condición es verdadera, se ejecuta el bloque de código.
let numeral = 5
if (5 == numeral) {
    console.log("El numero es igual")
} 

// 2. Else - Si la condición es falsa, se ejecuta el bloque de código.

if (5 == numeral) {
    console.log("El numero es igual")
} else {
    console.log("El numero no es igual")
}

// 3. Else if. Si la condición es falsa, se ejecuta la siguiente condición, y así hasta que se encuentre una condición verdadera.

let numeros = 18
let edadadulta = 18
if (numeros < edadadulta) {
    console.log("Es menor de edad")
    } else if (numeros == edadadulta) {
        console.log("Tiene 18 años")
        } else {
            console.log("Es mayor de 18 años")
            }

// 4. Switch. - Se utiliza para comparar un valor con varios valores posibles. 

let dia = 'Martes';
    switch (dia) {
    case 'Lunes':
        console.log('El día es Lunes');
        break;
        case 'Martes':
            console.log('El día es Martes');
            break;
            case 'Miercoles':
                console.log('El día es Miercoles');
                break;
                case 'Jueves':
                    console.log('El día es Jueves');
                    break;
                    case 'Viernes':
                        console.log('El día es Viernes');
                        break;
                        case 'Sabado':
                            console.log('El día es Sabado');
                            break;
                            case 'Domingo':
                                console.log('El día es Domingo');
                                break;
                                default:
                                    console.log('El día no existe');
                                    }

let fruta = "Kiwi"
switch (fruta) {
    case "Naranja":
        console.log("la fruta es Naranja")
    break;
    case "Manzana":
        console.log("la fruta es Manzana")
    break
    case "Platano":
        console.log("la fruta es Plátano")
    break
    case "Fresa":
        console.log("la fruta es Fresa")
    break
    case "Melocoton":
        console.log("la fruta es Melocotón")
    break
    case "Kiwi":
        console.log("la fruta es Kiwi")
    break
    default:
        console.log("No se que fruta es esa")
}
// 5. Ternario. Se utiliza para asignar un valor a una variable en base a una condición. La sintaxis es la siguiente: valor = condición ? valor1 : valor2;
let dias = 'Lunes';
    let mensaje = (dias === 'Lunes') ? 'El día es Lunes' : 'El día no es Lunes'; 
    console.log(mensaje);

let frutal = "Kiwi";
    let respuestas = (frutal === "Kiwi") ? "La fruta es Kiwi" : "La fruta no es Kiwi";
console.log(respuestas)

// 6. Condicional de múltiples condiciones. 
 let diacon = 'Lunes';
    if (diacon === 'Lunes' || diacon === 'Martes' || diacon === 'Miercoles') { 
    console.log('El día es de la lunes a miercoles'); 
} else { 
    console.log('El día es de jueves a domingo'); }

// 7. Condicional de múltiples condiciones con Switch - Si la condición es verdadera, se ejecuta el bloque de código. 
let diaswi = 'Lunes';
     switch (diaswi) {
         case 'Lunes':
         case 'Martes':
         case 'Miercoles':
            console.log('El día es de lunes a miercoles');
            break;
         default:
            console.log('El día es de jueves a domingo');
     } 

// 8. Condicional de múltiples condiciones con Ternario - Si la condición es verdadera, se ejecuta el bloque de código. 
let diater = 'Lunes'; 
    let mensajeter = (diater === 'Lunes' || diater === 'Martes' || diater === 'Miercoles') ? 'El día es de lunes a miercoles' : 'El día es de jueves a domingo'; 
    console.log(mensajeter)



















// TIPOS DE FUNCIONES 
/* 1. Función sin parámetros - La función no recibe parámetros y no devuelve ningún valor. 
    Ejemplo: function saludar() { 
    console.log('Hola, soy un saludo'); } */ 
/* 2. Función con parámetros - La función recibe parámetros y no devuelve ningún valor. 
    Ejemplo: function saludar(nombre) { 
    console.log('Hola, soy un saludo y mi nombre es ' + nombre); } */ 
/* 3. Función con parámetros y retorno - La función recibe parámetros y devuelve un valor. 
    Ejemplo: function saludar(nombre) { 
     return 'Hola, soy un saludo y mi nombre es ' + nombre; } */ 
/* 4. Función con parámetros y retorno con condición - La función recibe parámetros, devuelve un valor y tiene una condición. 
    Ejemplo: function saludar(nombre) { 
    if (nombre === 'Juan') { 
     return ' Hola, soy un saludo y mi nombre es ' + nombre; 
    } else { 
     return 'No soy un saludo'; } } */
/* 5. Función con parámetros y retorno con condición y parámetros por defecto - La función recibe parámetros, devuelve un valor, tiene una condición y parámetros por defecto. 
    Ejemplo: function saludar(nombre = 'Juan', edad = 25) {
    if (nombre === 'Juan') {
    return ' Hola, soy un saludo y mi nombre es ' + nombre + ' y tengo ' + edad + ' años'; 
    } else {
     return 'No soy un saludo'; } } */ 
/* 6. Función con parámetros y retorno con condición y parámetros por defecto y función dentro de función - La función recibe parámetros, devuelve un valor, tiene una condición, parámetros por defecto y tiene una función dentro de ella. 
    Ejemplo: function saludar(nombre = 'Juan', edad = 25) {
    function saludar2() { 
    return 'Hola, soy un saludo y mi nombre es ' + nombre + ' y tengo ' + edad + ' años'; 
    } 
    if (nombre === 'Juan') {
    return saludar2();
    } else {
     return 'No soy un saludo'; } } */


function multiplica(num1, num2) {
let resultado = num1 * num2;
return resultado;
} 
console.log(multiplica(5, 5)); // 25
console.log(multiplica(10, 10)); // 100
console.log(multiplica(2, 5));



