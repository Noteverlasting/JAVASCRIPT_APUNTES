// LIBRERIA FECHAS = date

const hoy = new Date()
console.log(hoy);
//Saber el año
console.log(hoy.getFullYear());
//saber el mes - con numeracion de array, es decir: Enero 0, Febrero 1, Marzo 2...
console.log(hoy.getMonth());
//saber el dia de la semana de hoy - con numeracion de array y empezando en domingo. Dom = 0, Lun = 1, Mar = 2... 
console.log(hoy.getDay());
//saber el numero del dia en el que estamos
console.log(hoy.getDate());
//los segundos que han pasado desde el 1/1/70
console.log(hoy.getTime());


let tomorrow = new Date("2025-03-26")
console.log(tomorrow.getDate());
tomorrow = new Date(hoy)
console.log(tomorrow);
tomorrow.setDate(tomorrow.getDate() + 1)
console.log(tomorrow);
tomorrow.toISOString()
console.log(typeof tomorrow);

let dia31 = new Date ("2025-03-31")
dia31.setDate(dia31.getDate() + 1)
console.log(dia31);
console.log(dia31.toISOString().split('T')[0]); 