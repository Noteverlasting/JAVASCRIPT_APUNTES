//EJEMPLO SALUDO

/* Vamos a partir de iuna hora definida;
const hora = 8

-Si la hora está entre las 7 y las 13 (ambas incluidas), diremos "Buenos días"
-Si la hora está entre las 14 y las 20 (ambas incluidas), diremos "Buenas tardes"
-En los demás casos diremos "Buenas noches" 

*/


//SOLUCION 1
const hora = 10;

//Primera indicación: Si la hora es igual o superior a 7:
if(hora >=7){
    //Dentro de esta condicion le indicamos que si hora es igual o menor a 13, la consola responde Buenos dias
    if(hora <=13){
        console.log("Buenos dias")
        //le indicamos también que si desde 13, hora es igual o menor a 20, la consola responde Buenas tardes
    } else if(hora <=20){
        console.log("Buenas tardes")
        //y ahora le indicamos que el cualquier otro caso que sea mayor de 20 responda Buenas noches 
        // (siempre que sea superior o igual a 7, que es la primera condicion)
    } else {
        console.log("Buenas noches")
    }
}
//Aquí le indicamos que si no se cumple ninguna de las otras condiciones (si es menor que 7), la consola devuelva Buenas noches
else {
    console.log("Buenas noches")
}


//SOLUCION EFECTIVA PERO CON DEMASIADO CÓDIGO
if (hora < 0) {
    console.log("Esta hora no existe");
} else if (hora < 7) {
    console.log("Buenas noches");
} else if (hora < 14) {
    console.log("Buenos días");
} else if (hora < 21) {
    console.log("Buenas tardes");
} else if (hora <=23) {
    console.log("Buenas noches");
} else {
    console.log("Esta hora no existe");
}

//SOLUCION 2
const hora2 = 10;

if(hora2 >= 7 && hora2 <=13) {
    console.log("Buenos días");
    } else {
        if(hora2 >=14 && hora2 <=20){
            console.log("Buenas tardes")
        }
        else {
            console.log("Buenas noches")
                    }
    }
    
    