//ACCESO AL DOM

const h1 = document.querySelector('h1') // OBTENEMOS TODA LA LINEA DEL ELEMENTO(<h1>.....<h1>) Y LE ASIGNAMOS UNA VARIABLE
console.log(h1);

const h1texto = document.querySelector('h1').textContent // OBTENEMOS EL CONTENIDO DE TEXTO DEL ELEMENTO DENTRO DE UNA VARIABLE, PERO ESTO CREA UN STRING, 
// NO CAMBIARÁ EL CONTENIDO DEL TEXTO SI CAMBIAMOS SU VALOR -- h1texto = "Titulo principal cambiado" NO SERVIRÁ PARA ESO -- 
console.log(h1texto);

h1.textContent = "Titulo principal cambiado"  //OBTENEMOS EL CONTENIDO DE TEXTO DEL ELEMENTO Y LE INDICAMOS QUE CAMBIE ESE CONTENIDO


//INTERACCION DESDE HTML DENTRO DE ETIQUETAS
// -- SISTEMA 1 -- combinando html y js
//Habiendo escrito la orden onclick="cambiaH1()", le declaramos la funcion:
function cambiaH1(){
    alert("Has hecho click en el Titulo Principal")
}



// -- SITEMA 2 -- desde .js
//seleccionamos con una constante el elemento a modificar
const h2 = document.querySelector("h2")

//Designamos al evento onclick una funcion usando la sintaxis de arrow:
h2.onclick = () => {
    h2.style.color = "red"
    //Aquí le indicamos que cambie de color a "red"
}

h2.ondblclick = () => {
    h2.style.fontSize = "64px"
    //Aquí le indicamos que cambie el tamaño de las fuentes a 64px
}

// -- SITEMA 3 -- desde .js con addEventListener
const h3 = document.querySelector("h3")

h3.addEventListener("click", () => {
    h3.style.backgroundColor = "darkgreen"
    alert(h3.textContent)
    h3.style.color = "white"
})


// SELECCIONES MULTIPLES (cuando hay más de un elemento igual)
//Creamos una constante y le designamos que seleccione TODAS las p
const parrafos = document.querySelectorAll("p")

console.log(`Hay ${parrafos.length} nodos p`);
//Aqui le indicamos que muestre la cantidad de <p> que hay en la página
 

// PARA CAMBIAR AL HACER CLICK SOLO UNO DE LOS P
// for (let i = 0 ; i < parrafos.length; i++ ) {
//     parrafos[i].addEventListener("click", () => {
//         if (ponteAzul) {
//         parrafos[i].style.backgroundColor = "steelblue"
//         parrafos[i].style.color = "white"}})}


let ponteAzul = true
for (let i = 0 ; i < parrafos.length; i++ ) {
    parrafos[i].addEventListener("click", () => {
        if (ponteAzul) {
        parrafos[i].style.backgroundColor = "steelblue"
        parrafos[i].style.color = "white"
        ponteAzul = false
    } else {
        parrafos[i].style.backgroundColor = "white"
        parrafos[i].style.color = "steelblue"
        ponteAzul = true
    }})
}

// COMO CAMBIAR EL CONTENIDO DEL ELEMENTO SELECCIONADO:
//Creamos una constante seleccionando el elemento <div>
const div = document.querySelector("div")

div.addEventListener("click", () => {
    div.innerHTML = "<h2> Soy un H2 nuevo!</h2>"
    //Con la etiqueta innerHTML reescribimos EL CONTENIDO de la seleccion
})


//OTROS EVENTOS

//Cuando pasamos el mouse encima del elemento
h1.addEventListener("mouseover", () => {
    h1.style.backgroundColor = "tomato"
    h1.style.color = "white"
})

//Cuando el mouse NO está encima del elemento
h1.addEventListener("mouseout", () => {
    h1.style.backgroundColor = "white"
    h1.style.color = "tomato"
})