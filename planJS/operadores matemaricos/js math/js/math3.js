let a = 2;
let b = -5;
let c = 3;

let discriminante = b ** 2 - 4 * a * c;

if (discriminante >= 0) {
    let solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    console.log("Las soluciones de la ecuación cuadrática son: " + solucion1 + " y " + solucion2);
} else {
    console.log("La ecuación no tiene soluciones reales.");
}
