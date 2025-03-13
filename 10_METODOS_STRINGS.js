//MÉTODOS DE STRINGS

let string = "Esto es un string un poco largo"
//recuerda:  0123456789

//Pasar todo a mayúsculas
// .toLocalUpperCase()
console.log(string.toLocaleUpperCase())
console.log(string)

string = string.toLocaleUpperCase()
console.log(string);

//Pasar todo a minúsculas
// .toLocalLowerCase()
console.log(string.toLocaleLowerCase())
console.log(string)

string = string.toLocaleLowerCase()
console.log(string);

//Obtener el tamaño de la cadena
// .length
console.log(string.length);
//la cadena tiene 31 elementos indexados

//Obtener la posición del primer valor designado
// .indexOf
console.log(string.indexOf("o"));
//el elemento "o" se muestra por primera vez en la posicion indexada 3

//Obtener la posición del último valor designado
// .lastIndexOf
console.log(string.lastIndexOf("o"));
//el elemento "o" se muestra por primera vez desde el final en la posicion indexada 30


//Cortar la cadena por posicion
// .slice()
console.log(string.slice(0,4));


//Pasar la cadena a Array
// .split()
console.log(string.split(" "))
//separa por el lugar que ocupen los carácteres que pongamos entre paréntesis al string para convertirlo en objetos dentro de un Array

//Sustituir valores 
// .replace("", "") cambia el valor del primer valor que esté designado con el indicado por el siguiente valor indicado
console.log(string.replace("o", "a"))
// .replaceAll("", "") cambia el valor de todos los valores designados en el primero por el segundo
console.log(string.replaceAll("o", "a"))

//Saber si en el string hay determinado tipo (devuelve respuesta booleana)
console.log(string.includes("str"))
console.log(string.includes("bool"))

//Saber si la cadena empieza por determinado valor (devuelve respuesta booleana)
console.log(string.startsWith("esto"))

//Saber si la cadena acaba por determinado valor (devuelve respuesta booleana)
console.log(string.endsWith("esto"))
console.log(string.endsWith("largo"))

// Invertir el orden del string (usamos split, reverse y join)
const textoInvertido = string.split("").reverse().join("")
console.log(textoInvertido);





//-----EJEMPLOS DE USOS DE LOS METODOS
let palabraConcatenada = "con" + "ca" + "te" + "na" + "da";
//SPLIT() separa el string y lo devuelve en un array/lista []
//Entre los paréntesis le indicamos cual será el separador de los cortes, en este caso los espacios.
//Si le indicamos una letra, tomará todas las letras iguales a esa y las eliminará separando por el lugar que ocupaban
let texto = "Hoy es lunes".split(" ");
console.log(texto)

//SLICE() corta por donde le indiquemos entre parentesis. El primer valor está incluido en el corte, el último NO.
console.log(palabraConcatenada.slice(1,3));
// Es como si las lineas de corte estuviesen ENTRE los elementos
//  c o n c a t e n a d a
// 0 1 2 3 4 5 6 7 8 9 10


//Como podemos solucionar que el usuario escriba mal -REFACTORIZAR-
let nombre = "    mArIA De LoS angeLeS   "
// nombre = "                JoSe AnTONio DE Los SaNtOs Garcia DEl monte de La Piedad" <--OTRA OPCION
//Lo primero quitar espacios laterales con trim
nombre = nombre.trim();
console.log(nombre)
//Despues separar en items cada uno de los contenidos por donde haya un espacio vacio
nombre = nombre.split(" ")
//Nos devuelve 4 items string separados
console.log(nombre)

//Crear una variable vacía
let nombreCorregido = ""
//Crear una variable que sea un Array vacio para llenar
let listaPalabrasNombre = []

//Ahora un bucle for, en el que indicamos que la iteracion final sea menor que el length de nombre,y aumente de 1 en 1
for (let i = 0; i < nombre.length; i++) {
    //Ahora le pedimos que nos muestre los elementos de dentro de la lista "[i]"
    console.log(nombre[i])
    //indicamos que la variante inicial sea el primer item de los elementos dentro de la lista nombre transformado a MAYUS
    let inicial = nombre[i].at(0).toLocaleUpperCase();
    console.log(inicial);
    //indicamos que la variante restoNombre sea un corte de los elementos dentro de la lista nombre desde el item con posicion 1 y pase el resto a Minusculas
    let restoNombre = nombre[i].slice(1).toLocaleLowerCase();
    console.log(restoNombre);
    //Indicamos que la variante nombreFinal sea la suma de incial y restoNombre.
    let nombreFinal = inicial + restoNombre;
    console.log(nombreFinal);
    //Si nombreFinal es "De" O "Los" O "Las" O "El" O "La" le indicamos que pase a Minusculas la coindicencia
    if (nombreFinal == "De" || nombreFinal == "Del" || nombreFinal == "Los" || nombreFinal == "Las" || nombreFinal == "El" || nombreFinal == "La") {
        nombreFinal = nombreFinal.toLocaleLowerCase();
    }
    //Ahora mismo el nombreFinal son 4 strings
    console.log(nombreFinal);

    //PUSH () Añade las palabras de manera ordenada
    listaPalabrasNombre.push(nombreFinal);
    console.log(listaPalabrasNombre);
    //acumular las palabras
    // nombreCorregido += nombreFinal + "";
  
}

//TOLOCALESTRING() convierte a string sin separaciones
//REPLACEALL() indicamos en el primer valor lo que queremos reemplazar seguido de "," y el valor que queremos que lo reemplace.
nombreCorregido = listaPalabrasNombre.toLocaleString().replaceAll(","," ");
console.log(nombreCorregido);
//JOIN () Realiza lo mismo que los dos anteriores juntos, une las palabras añadiendo el valor que queremos.
nombreCorregido = listaPalabrasNombre.join(" ")
console.log(nombreCorregido)