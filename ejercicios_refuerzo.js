//EJERCICIO 01

// Dado una palabra, por ejemplo 
let palabra = "marta"
// y una letra
let letra = "a"
//Debemos mostrar un mensaje que diga la cantidad de veces que está repetida la letra en la palabra


//EMPEZAMOS CON UN BUCLE FOR OF Y UNA VARIABLE DONDE GUARDAR EL RESULTADO, COMO ES UNA OPERACION MATEMÁTICA, LA INICIAMOS CON UN 0.
let resultado = 0
//PARA LOS caracter DE palabra, SI caracter ES IGUAL QUE letra, resultado SUMA 1. 
// Y VUELVE A HACER EL BUCLE HASTA TERMINAR LOS caracter DE palabra.
for (caracter of palabra) {
    console.log(caracter);
    if (caracter == letra){
        resultado +=1
    }
}
/*El bucle for...of itera sobre cada caracter de la cadena palabra.
En cada iteración, el caracter actual se asigna a la variable caracter.
Si el caracter actual es igual a letra, se incrementa el contador resultado.*/



//MOSTRAMOS VARIEDAD DE clg PARA DIVERSOS CASOS:

if (resultado == 0) {
    console.log(`en la palabra "${palabra}", la letra "${letra}" no aparece.`);
} else if (resultado == 1) { 
    console.log(`en la palabra "${palabra}", la letra "${letra}" aparece ${resultado} vez.`)
} else {
    console.log(`en la palabra "${palabra}", la letra "${letra}" aparece ${resultado} veces.`)
}

//Otra manera:
let palabra1 = "marta"
let letra1 = "a"
let resultado1= 0
for (let i = 0 ; i < palabra1.length ; i++) {
    if (palabra1[i] == letra1){
        resultado1 +=1
    }
}
if (resultado1 == 0) {
    console.log(`en la palabra "${palabra1}", la letra "${letra1}" no aparece.`);
} else if (resultado1 == 1) { 
    console.log(`en la palabra "${palabra1}", la letra "${letra1}" aparece ${resultado1} vez.`)
} else {
    console.log(`en la palabra "${palabra1}", la letra "${letra1}" aparece ${resultado1} veces.`)
}



//EJERCICIO 2
//Conocidos dos lados de un triángulo rectangulo, obtener el area  (b * a / 2):
const lado1 = 3
const lado2 = 4

console.log(lado2 * lado1 / 2);

const resultador = (lado1 * lado2) / 2
console.log("El resultado es", resultador);



//EJERCICIO 3
//Vamos a comprar una determinada cantidad de un artículo y sabemos su precio unitario.
//Queremos obtener la cantidad total a pagar

const bricksLeche = 3
const precioBrick = 1.25

const precioTotal = (precioBrick * bricksLeche)
console.log(precioTotal);
console.log("El precio total es", precioTotal);

//VARIACION
const articulo = [bricksLeche, precioBrick]
console.log("El precio total es", articulo[0] * articulo[1]);

//VARIACION

const articulos = ["leche", "huevos", "sal", "harina"]
const cantidades = [2, 1, 1, 3]
const precios = [1.25, 3.25, .9, .78]

//Queremos obtener algo parecido a un ticket
// leche: 2 * 1.25 = 2.5
// huevos 1 * 3.25 = 3.25 
//...


//BUSCAMOS ENTRE TODOS LOS ELEMENTOS DEL ARRAY, DE UNO EN UNO
// le indicamos al for que lea todos los indices, uno a uno hasta llegar al máximo (length) del array articulos 

let totalCompra = 0
for ( let i = 0 ; i < articulos.length ; i++) {
    //va a realizar el bucle por todos los [i] que tengan la longitud máxima que le hemos marcado, en este caso la del array articulos
    console.log(articulos[i]);
    console.log(cantidades[i]);
    console.log(precios[i]);
    //Como todos nuestros indices coinciden en posición, podemos realizar las operaciones
    //Comenzamos por definir una variable dentro del for con la ecuacion necesaria para saber el precio parcial (el de cada item por su precio y cantidad)
    let parcialCompra = cantidades[i]*precios[i]
    //Le indicamos que la variable totalCompra añada en cada vuelta la ecuación cantidades[i]*precios[i]
    totalCompra += parcialCompra
    //Le indicamos que la variable mensaje realice la operación y muestre el mensaje.
    let mensaje = `${articulos[i]}: ${cantidades[i]} x ${precios[i]} = ${parcialCompra} €`
    console.log(mensaje);
}
//PARA SABER EL TOTAL DE LA COMPRA ENTERA:

console.log(`El importe total de la compra es ${totalCompra}`);



//PLANTEAMIENTO DEL EJERCICIO PARA SOLUCIONARLO CON OBJETOS
//creamos un array vacio, el carro
let carroCompra = []
//definimos el primer objeto que voy a comprar con sus claves y valores
const leche = {nombreProducto : "leche", cantidad : 2, precioProducto : 1.25}
//ordenamos con push que dentro de carroCompra meta al objeto leche
carroCompra.push(leche)
console.log(carroCompra);
//seguimos definiendo los objetos
const huevos = {nombreProducto : "huevos", cantidad : 1, precioProducto : 3.25}
carroCompra.push(huevos)
console.log(carroCompra);

//OTRO MODO DE REALIZARLO
//Creamos el array carrito
let carrito = []
//definimos el primer objeto que voy a comprar con sus claves y valores
let articuloComprado = {nombreProducto : "leche", cantidad : 2, precioProducto : 1.25}
//ordenamos con push que dentro de carrito meta al objeto articuloComprado con push
carrito.push(articuloComprado)
console.log(carrito);
//Cambiamos el contenido (o redefinimos) el objeto articuloComprado y le hacemos push
articuloComprado = {nombreProducto : "huevos", cantidad : 1, precioProducto : 3.25}
carrito.push(articuloComprado)
console.log(carrito);
//repetimos la Redefinicion con cada articulo nuevo que queramos introducir en el carrito, con sus claves y valores
articuloComprado = {nombreProducto : "sal", cantidad : 1, precioProducto : .9}
carrito.push(articuloComprado)
console.log(carrito);

//Accedemos a cada uno de los elementos que hay dentro de la variable carrito con el bucle for of
for (producto of carrito) {
    //creamos una variable para que realice la operacion cantidad * producto
    let parcialCompra1 = producto['cantidad'] * producto['precioProducto']
    //creamos dentro del bucle la variable textoCompra, a la que indicamos que muestre el valor 
    //de la clave (nombreProducto,cantidad,precioProducto) de cada item (producto, en este caso) del Array carrito
    //por ultimo, que muestre parcialCompra1 (el resultado de cada compra de producto) al final.
    let textoCompra1 = `${producto['nombreProducto']} : ${producto['cantidad']} x ${producto['precioProducto']} = ${parcialCompra1}`;
    console.log(textoCompra1);
}


//EJERCICIO 4
//Contar segundos


function calculasec (num) {
//creamos la variable segundos, que va a dar como resultado el RESTO de num entre 60
let segundos = num % 60
//creamos la variable minutosTotales, que va a ser el resultado de num - segundos (resto de num entre 60) entre 60
let minutosTotales = (num - (segundos)) /60
console.log(minutosTotales);
//creamos la variable minutos, que es el resto de minutostotales entre 60 (los que tiene una hora, la siguiente unidad)
let minutos = minutosTotales % 60
//creamos la variable horasTotales, que va a ser el resultado de minutosTotales - minutos (resto de minutosTotales entre 60) entre 60
let horasTotales = (minutosTotales - (minutos)) / 60;
console.log(horasTotales);
//creamos la variable horas, que divide horasTotales entre 24 (las que tiene un dia, la siguiente unidad)
let horas = horasTotales % 24;
//creamos la variable dias, que va a ser el resultado de horasTotales - horas (resto de horasTotales entre 24) entre 24.
let dias = (horasTotales - (horasTotales % 24)) / 24;

return (`El total es de ${parseInt(dias)} dias, ${parseInt(horas)} horas, ${parseInt(minutos)} minutos, y ${parseInt(segundos)} segundos`);

}

let tiempos = calculasec (3698)
console.log(tiempos);


//otra solucion
function convertirSegundos (secs){
const SEGUNDOSMINUTO = 60
const SEGUNDOSHORA = SEGUNDOSMINUTO * 60
const SEGUNDOSDIA = SEGUNDOSHORA * 24

const DIAS = parseInt(secs / SEGUNDOSDIA)
console.log(DIAS);

let SEGUNDOS_RESTANTES = secs % SEGUNDOSDIA
console.log(SEGUNDOS_RESTANTES);

const HORAS = parseInt(SEGUNDOS_RESTANTES / SEGUNDOSHORA)
console.log(HORAS);

SEGUNDOS_RESTANTES = SEGUNDOS_RESTANTES % SEGUNDOSHORA
console.log(SEGUNDOS_RESTANTES);

const MINUTOS = parseInt(SEGUNDOS_RESTANTES / SEGUNDOSMINUTO)
console.log(MINUTOS);
SEGUNDOS_RESTANTES = SEGUNDOS_RESTANTES % SEGUNDOSMINUTO
console.log(SEGUNDOS_RESTANTES);

return (`${DIAS} dias : ${HORAS} horas : ${MINUTOS} minutos : ${SEGUNDOS_RESTANTES} segundos`)
}

let pregunta = convertirSegundos (3691)
console.log(pregunta)





