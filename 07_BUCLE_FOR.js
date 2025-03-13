//BUCLE for

/* Estructura del bucle for (clásica):
    for (punto de inicio; punto de finalizacion; paso o incremento)
*/
for (let i = 1; i <= 5; i++ ) {
    console.log(i);
    
}


//BUCLE for of  PARA ARRAYS --NO FUNCIONA CON LOS OBJETOS!!!!!!--
//NOS MUESTRA EL VALOR

let array = [1, 2, 3, 4, 5]
let objeto = {nombre : "Peter", apellido: "Parker"}

for (numero of array) {
    console.log(numero);
}

let texto = "Abracadabra"
for (letra of texto){
    letra = letra.toLowerCase()
    if (letra == "a"){ //SI EL VALOR DE LETRA ES A
        continue       //SALTA A LA SIGUIENTE CONDICIÓN 
    }
    console.log(letra);
}



f
//BUCLE for in  PARA OBJETOS!!!!
//NOS MUESTRA EL INDICE

for (key in objeto) {
    console.log(key, objeto[key]);
}