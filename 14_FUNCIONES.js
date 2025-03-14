//FUNCIONES 

//Una función es un bloque de código diseñado para realizar una tarea específica. 
//Permiten encapsular código para poder ejecutarlo sin tener que escribirlo cada vez.
//Las funciones pueden recibir parámetros y devolver un valor.


//PRIMERO declaramos la funcion
//function nombre (parametros){
// bloque de codigo a ejecutar
//}
function sumar (num1, num2) {
    console.log(num1 + num2);
}

//SEGUNDO invocamos la funcion
sumar(1,2)
//podemos invocarla todas las veces necesarias
sumar(300,110)


//Como no es lo deseado que nos ejecute un clg, vamos a declarar una funcion más util
function sumar2 (num1, num2) {
    //en lugar de un clg, le indicamos return, para que nos devuelva la suma
    return (num1 + num2);
}
//Cuando la funcion encuentra un return, finaliza y envia (termina la funcion como un break, pero devuelve los parametros que indiquemos)
let resultado = sumar2(5,5)
console.log(resultado);



//EJERCICIO
//vamos a tener dos fechas, una es la de nacimiento de una persona, y la otra la fecha de referencia
//Queremos que se nos muestre la edad que tenía esa persona en la fecha de referencia.


const fechanwac = "13-06-2000"
const fechawref = "13-03-2025"

//PRIMERO - CREAMOS LA FUNCION y separamos los items en un array por las comillas con split('-')

function calcularEdad (fechanac, fecharef) {    
const datosnac = fechanac.split('-')
        console.log(datosnac);
const datosref = fecharef.split('-')
        console.log(datosref);


//SEGUNDO - damos a cada item una variable y los pasamos a numero entero con parseInt
        let dianac = parseInt(datosnac[0])
        console.log(dianac);
        let mesnac = parseInt(datosnac[1])
        console.log(mesnac);
        let anyonac = parseInt(datosnac[2])
        console.log(anyonac);


        let diaref = parseInt(datosref[0])
        console.log(diaref);
        let mesref = parseInt(datosref[1])
        console.log(mesref);
        let anyoref = parseInt(datosref[2])
        console.log(anyoref);

//TERCERO - obtenemos las diferencias

const diferenciaAnyos = (anyoref - anyonac)
console.log(diferenciaAnyos);

const diferenciaMeses = (mesref - mesnac)
console.log(diferenciaMeses);

const diferenciaDias = (diaref - dianac)
console.log(diferenciaDias);

let edadactual = diferenciaAnyos
if (mesref < mesnac) {
    edadactual -= 1
} else if (mesref == mesnac && diaref < dianac){
    edadactual -= 1
}

console.log(edadactual);

    return (`Tu edad es ${edadactual} años`)
}

let resedadactual = calcularEdad(fechanwac, fechawref)
console.log(resedadactual);


let edad1 = calcularEdad("15-15-1922", "12-01-2025")
console.log(edad1);

//==============================================================
//SINTAXIS ALTERNATIVA 1

let restar = function(num1, num2) {
    return(num1-num2)
}

let restauno = restar(10, 5)
console.log(restauno);

//==============================================================
//SINTAXIS ALTERNATIVA 2 (sintaxis de flecha/arrow function)
//declaramos la funcion indicando primero los paréntesis con sus parámetros y después usamos => (arrow) y ya seguimos con el bloque de codigo entre llaves

let restar2 = (num1, num2) => {
    return(num1-num2)
}

let restados = restar2(10, 5)
console.log(restados);


//==============================================================
//SINTAXIS ALTERNATIVA 3 (sintaxis de flecha/arrow function)
//Solo si es una linea de codigo

let restar3 = (num1, num2) => num1 - num2

let restatres = restar3(10, 5)
console.log(restatres);

