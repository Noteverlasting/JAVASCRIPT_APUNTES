// ¿Para qué sirve JS?

/*Es un lenguaje para dotar de interacción a la web (cliente -el ordenador desde el que se escribe-)
Además se pueden crear ahora aplicaciones en el servidor y en escritorio (con electron)*/


//¿Cómo es JS?

/*Por una parte es un lenguaje de tipado dinámico 
    (los tipos de las variables pueden variar)
*/

let miVariable = 1
miVariable = "Texto"
miVariable = true

/*Por otra parte, es de "tipado débil"
*/

let saludo = "Hola" //string
let numero = 12     //number
let total = saludo + numero  //transforma el numero en string y viceversa
console.log(total);

