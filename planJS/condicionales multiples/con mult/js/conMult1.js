let dia = "Lunes";

switch (dia) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        console.log("Toca ir al sena");
        break;
    case "Sábado":
    case "Domingo":
        console.log("No hay que ir al sena");
        break;
    default:
        console.log("Día no válido.");
}
