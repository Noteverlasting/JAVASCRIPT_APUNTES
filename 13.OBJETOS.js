//OBJETOS 

//Si queremos tener listas que contengan datos que se relacionen entre ellos, usar Arrays podría llevar a errores ya que
//podemos errar en el orden o dejarnos algun dato, lo que crearía un error de indexado.
let alumnos = ["ana","pau","roc","laura"]
let apellidos = ["pou","garcia","mateu","roca"]

//Imaginemos que queremos tener una lista con todos estos datos de cada uno de los alumnos
// nombre
// apellido
// fechaNacimiento
// codigoPostal

let objetoAlumno = {}
objetoAlumno ["nombre"] = "ana"
objetoAlumno ["apellido"] = "pou"
objetoAlumno ["fechaNacimiento"] = "2000-03-12"
objetoAlumno ["codigoPostal"] = "08001"

console.log(objetoAlumno);
console.log(`El nombre del alumno es ${objetoAlumno["nombre"]}`);

//LOS OBJETOS SON MUTABLES, EN CUANTO A VALORES Y CLAVES
objetoAlumno ["nombre"] = "marta"
console.log(`El nombre del alumno es ${objetoAlumno["nombre"]}`)



//Podemos definir la sintaxis de un modo más directo, indicando dentro de los corchetes todas las claves y valores 
let objetoAlumno2 = {nombre : "pau", apellido : "garcia", fechaNacimiento : "1995-04-25", codigoPostal : "08027" }


//LOS ARRAYS Y LOS OBJETOS FUNCIONAN CONJUNTAMENTE,
//Vamos a crear un Array que contenga los dos objetos que hemos creado:
let listaAlumnos = [objetoAlumno, objetoAlumno2] //listaAlumnos[i]

for (let i = 0; i < listaAlumnos.length; i++) {
    //Vamos a pedirle que nos muestre todos los datos de los objetos dentro del array listaAlumnos
    console.log(listaAlumnos[i]);
    //
    console.log(`El alumno se llama ${listaAlumnos[i]['nombre']}`);
    console.log(`El alumno se llama ${listaAlumnos[i].nombre}`);
}

let autores = [ "antonio", "pepe"]
let objetoLibro = {autorNombre: [autores], edicion : 2005}
console.log(objetoLibro);