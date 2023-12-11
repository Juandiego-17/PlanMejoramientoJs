let calificacion = 85;

switch (true) {
    case calificacion >= 90:
        console.log("A - Excelente");
        break;
    case calificacion >= 70:
        console.log("A - Cumple con lo solicitado");
        break;
    case calificacion <= 69:
        console.log("D - No cumple los requisitos minimos");
        break;
    default:
        console.log("F - Reprobado");
}
