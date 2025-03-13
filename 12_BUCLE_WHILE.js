//BUCLE WHILE
//Mientras se de una condicion determinada, ese bucle se ejecutará



let arrayFrutas = ["kiwi", "pera", "piña", "manzana"]

//while simple
//sintaxis:
// while (condicion) { bloque de codigo a ejecutar }


//SI LA CONDICION ES false, NO SE VA A EJECUTAR
// while (false) {console.log(1);}


let i = 0
//Le indicamos que MIENTRAS i sea menor de 10, la consola muestre i. Y que después de mosrarlo, aumente i en una unidad.
//Cuando llegue a 9 (que es el ultimo numero menor que 10), while parará ya que deja de cumplirse la condición
while (i < 10){
    console.log(i);
    i++
}


//DO WHILE
//do { bloque de código a ejecutar } while ( condicion )
let dia = "miercoles"

do { //Vamos a indicarle que nos muestre el mensaje "hoy es miercoles"
    console.log("Hoy es miércoles");
    dia = "martes" //Ahora le hemos indicado que cambie el dia a martes
} while (dia == "miercoles") //MIENTRAS dia se mantenga siendo miercoles, se sigue ejecutando. Como ahora es martes, se para.


let num = 1
do { //Vamos a indicarle que muestre el valor de la variable num
    console.log(num);
    num++ //Le indicamos que lo haga añadiendo 1 cada vez
} while (num <=5) //La orden es que MIENTRAS el numero sea menor o igual que 5, se ejecute.

let lista = [1, 2, 3]
for (let i= 0; i < lista.length; i++) {
    console.log(lista[i]);
    //i-- ESTO GENERARÍA UN BUCLE INFINITO, YA QUE i NUNCA PUEDE LLEGAR A LA LONGITUD DE lista
}

