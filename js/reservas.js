//Variable para comprobar que todos los datos estén correctos
let todoOK = true

const nombreHTML = document.getElementById('nombre')
const apellidoHTML = document.getElementById('apellido')

nombreHTML.addEventListener('change', () => {
    let nombre = nombreHTML.value.trim()
    document.getElementById('errorNombre').textContent = ""
    if (nombre.length < 2) {
        document.getElementById('errorNombre').textContent = "Introduce un nombre válido"
        //si hay errores en el nombre, todoOK pasa a ser false
        todoOK = false
        
}
})

nombreHTML.addEventListener('focusout', () => {
    nombreHTML.value = nombreHTML.value.trim()
})



apellidoHTML.addEventListener('change', () => {
    let apellido = apellidoHTML.value.trim()
    document.getElementById('errorApellido').textContent = ""
    if (apellido.length < 2) {
        document.getElementById('errorApellido').textContent = "Introduce un apellido válido"
        //si hay errores en el nombre, todoOK pasa a ser false
        todoOK = false
}
})

//CONTROL DE LAS FECHAS
const entrada = new Date()
let salida = new Date(entrada)
//a la salida le asignamos la fecha de la entrada y añadimos un dia más
salida.setDate(salida.getDate() + 1)

const entradaString = entrada.toISOString().split('T')[0]
let salidaString = salida.toISOString().split('T')[0]

const entradaInput = document.getElementById('entrada')
entradaInput.setAttribute('value', entradaString)
entradaInput.setAttribute('min', entradaString)

const salidaHTML = document.getElementById('salida')
salidaHTML.setAttribute('value', salidaString)
salidaHTML.setAttribute('min', salidaString)

entradaInput.addEventListener('change', () => {
    //cuando no sabemos la fecha porque depende del cambio, el listener se activa y obtiene el valor de entrada
    salida = new Date(entradaInput.value)
    //Le asignamos un dia mas
    salida.setDate(salida.getDate() + 1)
    //Lo convertimos en string y lo cortamos por la T, que es la parte que nos interesa
    salidaString = salida.toISOString().split('T')[0]
    //volvemos a modificar los atributos del valor y del mínimo
    salidaHTML.setAttribute('value', salidaString)
    salidaHTML.setAttribute('min', salidaString)
})



//OBTENER Y MOSTRAR LOS DATOS DE UN FORMULARIO EN UN DIALOG
//metemos el formulario en una constante
const form1 = document.forms['form1']
//metemos el dialog en una constante
const ventanaReserva = document.getElementById('ventanaReserva')
const ventanaError = document.getElementById('ventanaError')



//Creamos un evento para cuando se haga submit del form1
form1.addEventListener('submit', (evento) => {
    //Le indicamos que no se recargue la página al hacer submit, que es su actuacion predefinida
    evento.preventDefault()
    //Ya podemos pedirle los valores que necesitemos y llamar al dialog de html para mostrarlos

    //si todoOK es false (!) no se ejecuta el resto de código
    if (!todoOK) return   
    //si todo está bien, se ejecutan estas líneas de código que mostrarán la ventana emergente con los textos aqui descritos
    let resumenReservaDialog = `<p>Reserva realizada a nombre de <span>${form1['nombre'].value} ${form1['apellido'].value}</span></p>`
    resumenReservaDialog += `<p>Adultos : <span>${form1['adultos'].value}</span> - Niños : <span>${form1['ninios'].value} </span></p>`
    resumenReservaDialog += `<p>Fecha de entrada : <span>${form1['entrada'].value} </span></p> `
    resumenReservaDialog += `<p>Fecha de salida : <span>${form1['salida'].value} </span></p> `
    resumenReservaDialog += `<p>Tipo de estancia : <span>${form1['estancia'].value} </span></p> `

    document.getElementById('resumenReserva').innerHTML = resumenReservaDialog

    ventanaReserva.showModal()

})




