const nombreHTML = document.getElementById('nombre')
const apellidoHTML = document.getElementById('apellido')

nombreHTML.addEventListener('change', () => {
    let nombre = nombreHTML.value.trim()
    //validacion de los espacios
    if (nombre.length < 2) {
        document.getElementById('errorNombre').textContent = "Introduce un nombre válido"
    }
})

apellidoHTML.addEventListener('change', () => {
    let apellido = apellidoHTML.value.trim()
    //validacion de los espacios
    if (apellido.length < 2) {
        document.getElementById('errorApellido').textContent = "Introduce un texto válido"
    }
})