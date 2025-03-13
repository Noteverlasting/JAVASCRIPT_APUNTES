//OPERADORES LÓGICOS
// Se utilizan para agrupar opciones que se deben dar.
// && (y - and)
// || (o - or)



/* PODEMOS USAR EL EJEMPLO DEL SALUDO PARA HACERLO MÁS CORTO Y EFICIENTE

----SOLUCION EFECTIVA PERO CON DEMASIADO CÓDIGO
if (hora < 0) {
    console.log("Esta hora no existe");
} else if (hora < 7) {
    console.log("Buenas noches");
} else if (hora < 14) {
    console.log("Buenos días");
} else if (hora < 21) {
    console.log("Buenas tardes");
} else if (hora <=23) {
    console.log("Buenas noches");
} else {
    console.log("Esta hora no existe");
}

*/

//PRECEDENCIA DE LOS OPERADORES
//Precedencia= *, /, +, -
let operacion = 1 + 2 - 3 * 4 / 5  
//En cambio si ponemos paréntesis, preceden ante las otras operaciones
let operacion2 = (1 + 2) - 3 * 4 / 5

//NOTA: ES MEJOR PONER LAS VARIABLES ENTRE PARENTESIS PARA NO LIARNOS


//EJEMPLO
const hora = 8

//Le indicamos que la franja del if menor que 0 o mayor que 23 muestre "Esta hora no existe"
if ((hora < 0) || (hora >23)) {
    console.log("Esta hora no existe");

} else if ((hora >= 7) && (hora <=13)) {
    console.log("Buenos dias");
} else if ((hora >= 13) && (hora <=20)) {
    console.log("Buenas tardes");
} else {
    console.log("Esta hora no existe");
}



