
//PRIMERO
//Creamos los datos de las ciudades

const ciudades = {
    "españa" : ["barcelona", "valencia", "bilbao"],
    "francia" : ["paris", "lyon", "marsella"],
    "alemania" : ["amsterdam", "munich", "berlin"],
    "brasil" : ["brasilia", "rio de janeiro", "Sao Paulo"],
    "peru" : ["lima", "arequipa", "trujillo"],
    "argentina" : ["la plata", "salta", "buenos aires"],
    "marruecos" : ["casablanca", "marrakech", "fez"],
    "egipto" : ["el cairo", "alejandria", "luxor"],
    "sudafrica" : ["johannesburgo", "durban", "ciudad del cabo"]
}

const paises = {
    "europa" : ["españa", "francia", "alemania"],
    "america" : ["brasil", "peru", "argentina"],
    "africa" : ["marruecos", "egipto", "sudafrica"]
}


//SEGUNDO
//Queremos obtener el formulario

const form1 = document.forms['form1']

//TERCERO
//Obtener los select cuyo contenido va a cambiar

const ciudad = document.getElementById('ciudad')
const pais = document.getElementById('pais')
const continente = document.getElementById('continente')


//CUARTO
//Crear los eventos y bucles necesarios 

continente.addEventListener('change', () => {
    //Creamos un const para seleccionar el valor del campo continente del formulario
    const SeleConti = form1.continente.value
    //
    let SelePaises = ""

    for (cadauno in paises) {
        if (cadauno == SeleConti) {
            const ObtePais = paises[cadauno]
            ObtePais.forEach((pais) => {
            SelePaises += `<option value="${pais}">${pais}</option>`
        })
        break
        }
    }
    pais.innerHTML = SelePaises
    actualizaCiudad(form1.pais.value)
})





pais.addEventListener('change', () => {
    //Creamos una const que es el valor que se seleccione en pais dentro del formulario
    const SelePais = form1.pais.value
    //Creamos otra variable (vacia) para poder almacenar la nueva seleccion
    actualizaCiudad(SelePais)
})




function actualizaCiudad(pais) {
        let SeleCiudades = ""

    for (elemento in ciudades)
        if (pais == elemento) {
            const ObteCiudades = ciudades[elemento];
            ObteCiudades.forEach((ciudad) => {
                SeleCiudades += `<option value="${ciudad}">${ciudad}</option>`
            })
            break
        }

    ciudad.innerHTML = SeleCiudades
}


