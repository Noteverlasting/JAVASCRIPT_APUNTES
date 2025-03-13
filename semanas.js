const diaSemana = "do mingo"

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        
        console.log(diaSemana," No es festivo");
        break;
    case "sabado":
    case "domingo":
        console.log(diaSemana," es Fin de Semana");
        break;
    default:
        console.log(diaSemana," es un Dia desconocido");
    
}
