//ARRAYS
//Son listas que grupan los datos en una colección


const dia = "viernes"
//Dentro de un array podemos poner la información que queramos.
//como en este hay: numero, numero decimal, string, boolean y constante(o variable)
let miPrimerArray = [1, 3.5, "hola", true, dia ]
//VALORES INDEXADOS  0   1      2      3    4
//SIEMPRE EMPIEZAN POR EL 0 !!!!!!!

//Si le pedimos a la consola que nos muestre todo el array, muestra todos los datos
console.log(miPrimerArray);
//Podemos pedirle que nos muestre cada uno de los valores de nuestro Array
console.log(miPrimerArray [0])
console.log(miPrimerArray [1])
console.log(miPrimerArray [2])
console.log(miPrimerArray [3])
console.log(miPrimerArray [4])

//Podemos averiguar la longitud del Array creando una constante y pidiendo que sea el .lenght
const longitudArray = miPrimerArray.length
//Con esto creado, le pedimos a la consola que nos devuelva el dato
console.log(longitudArray);
//Podemos ver el último item del Array pidiendole a la consola que muestre el item -1 de la longitud de la lista
console.log(miPrimerArray[miPrimerArray.length -1 ]);

//Podemos averiguar cual es el último elemento del Array poniendole la posición -1
console.log(miPrimerArray.at(-1))
//Podemos cambiar el valor de cualquier item del Array de este modo:
miPrimerArray[0] = 2
console.log(miPrimerArray)