


/*
Operaciones matemáticas:
+
-
*
/
** elevado a un exponente
% modulo

*/
let num1 = 5

let num2 = 3
let operacion = "%"
console.log(num1, operacion, num2, "=", num1/num2);

let num3 = 25 
num3 = num3 + 1 // Sumar un numero a la variable
num3 += 1       // Sumar un numero a la variable
num3++          // Para incrementar en 1 la variable
num3--          // Para restar en 1 la variable
console.log(num3);


let num4 = 25

num4 = num4**0.5
console.log(num4)





// if (operacion=="/"){
//     console.log(num1, operacion, num2, "=", num1/num2);
// }
// else if (operacion== "*"){
//     console.log(num1, operacion, num2, "=", num1*num2);
// }
// else if
//  (operacion== "+"){
//     console.log(num1, operacion, num2, "=", num1+num2);
// }
// else if(operacion== "-"){
//     console.log(num1, operacion, num2, "=", num1-num2);
// }
// else if (operacion== "**"){
//     console.log(num1, operacion, num2, "=", num1**num2);
// }
// else if(operacion== "%"){
//     console.log(num1, operacion, num2, "=", num1%num2);
// }

    

// else{
//     console.log("Operador no valido");
// }
    


switch (operacion) {  //Si operacion coincide con el simbolo,accede al case

    case "+" :
        console.log(num1, operacion, num2, "=", num1+num2);  
    breake  
    case "-" :
        console.log(num1, operacion, num2, "=", num1-num2); 
}