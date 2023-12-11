let dia = "Lunes";

switch (dia) {
    case "Lunes":
        console.log("Base de datos");
        break;
    case "Martes":
        console.log("Ingles");
        break;
    case "Miércoles":
        console.log("Python");
        break;
    case "Jueves":
        console.log("JavaScript");
        break;
    case "Viernes":
        console.log("Etica y Comunicaciones");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Es fin de semana.");
        break;
    default:
        console.log("Día no válido.");
}
