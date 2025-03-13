// TRADUCTOR DE DIAS

//El usuario elige un dia.
//El programa debe responder su equivalente en el otro idioma
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

//forma LARGA
const diaElegido = "miercoles"
for(let i = 0; i < dias.length; i++){
if (diaElegido == dias[i]) {
    console.log(days[i])
    break
}
}

//forma CORTA
console.log(dias.indexOf("martes"));
console.log(days[dias.indexOf("martes")])