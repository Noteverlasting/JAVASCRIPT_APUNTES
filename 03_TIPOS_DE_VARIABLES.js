//TIPOS DE VARIABLES
//Hay muchisimos tipos de variables, de hecho el programador puede crear los suyos propios.
/* Para saber de que tipo es una variable podemos usar la función typeof
    console.log(typeof (laVariable))*/


//Vamos a empezar por los tipos primitivos

//NÚMEROS
let precio = 3.5 // <--number float
let unidades = 3 // <--number
//Javascript no es un lenguaje preciso con los decimales

console.log(3.01 + 2.1);


//STRINGS o cadenas de texto

//1
//se delimitan entre comillas, hay que tener cuidado de las comillas que se usan (simples o dobles)
//ESTAS VARIABLES SOLO ADMITEN TEXTO
let texto1 = "Soy un texto"
let texto2 = 'Soy un texto'
let texto3 = "I'm the best"
let texto4 = 'Ella me dijo "buenos días"'
//CONCATENACIÓN (se pueden sumar, pero no restar!!)
let saludo1 = "Buenos "
let saludo2 = "Días"
let saludocompleto = saludo1 + saludo2 
console.log(saludocompleto);
//Muestra de que no se pueden restar directamente los strings:
let prueba = saludocompleto - saludo1 
console.log(prueba);

//2
//Si se delimitan entre acentos agudos (``)
//ESTAS VARIABLES PERMITEN REALIZAR OPERACIONES DENTRO DE ELLAS
let texto5 = `hoy es viernes`  //Este tipo se llama TemplateLiteral o TemplateString
let resultado = `Precio: ${precio}, total ${precio * unidades}` 


//3
//BOOLEANS (verdadero-> true || falso-> false)
let condicion1 = true
let condicion2 = false

//Las condiciones se obtienen de operadores de comparación o de funciones específicas
//Por ejemplo; ¿3 es igual a 5?
// == para obtener la igualdad
console.log(3 == 5);

//NaN --> Not a Number (se obtiene cuando se estén realizando operaciones que no pueden devolver un resultado)
//Infinity --> Se obtiene al dividir algun numero entre 0


//Undefined --> Si no le hemos asignado un tipo a nuestra variable
let diaSemana
console.log(typeof(diaSemana));

















