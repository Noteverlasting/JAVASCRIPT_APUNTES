//MÉTODOS DE ARRAYS

let arrayfrutas = ["Platano", "Melocoton", "Pera", "Manzana", "Limon"]
let frutas2 = ["Melón", "Cereza"]

//Averiguar el tipo de variable que es
console.log(typeof arrayfrutas);

//Averiguar la cantidad de elementos dentro del Array
console.log(arrayfrutas.length);

//Cambiar un elemento del Array
arrayfrutas[3] = "Piña"
console.log(arrayfrutas);

//Añadir un elemento al Array (se añaden al final)
arrayfrutas.push("Mandarina")
console.log(arrayfrutas);

//Añadir más de un elemento al Array (se añaden al final)
let arrayfrutasNew = arrayfrutas.concat(frutas2);
console.log(arrayfrutasNew)

//Quitar el elemento final del Array
arrayfrutasNew.pop()
console.log(arrayfrutasNew);

//Quitar el elemento final del Array moviendolo a otra variable
let frutaolvidada = arrayfrutasNew.pop()
console.log(frutaolvidada);

//Añadir el elemento al principio del Array
arrayfrutasNew.unshift("Sandia");
console.log(arrayfrutasNew);

//Quitar el primer elemento del Array
arrayfrutasNew.shift()
console.log(arrayfrutasNew);

//Quitar el primer elemento del Array y guardarlo en otra variable
let frutarecuperada = arrayfrutasNew.shift()
console.log(frutarecuperada)

//Darle la vuelta a los elementos del Array
console.log(arrayfrutasNew.reverse());

//Pasar el Array a String sin separaciones
let string1 = arrayfrutasNew.toLocaleString();
console.log(string1);
//Pasar el Array a String con los elementos separadores que queramos (entre parentesis)
let string2 = arrayfrutasNew.join(", ")
console.log(string2);


//Ordenar los valores del Array
//Los strings son ordenados alfabéticamente, teniendo en cuenta su posición para mostrarlos
//LAS MAYÚSCULAS VAN ANTES 
console.log(("anna" < "maria"));
console.log(("maria" < "marta"));
console.log(("maria" < "Marta"));


arrayfrutasNew.sort()
console.log(arrayfrutasNew);