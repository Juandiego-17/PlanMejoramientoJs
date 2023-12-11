let add = 0;
let num;

while (num !== 0) {
    num = parseFloat(prompt("Ingresa un número (ingresa 0 para finalizar):"));

    if (!isNaN(num)) {
        add += num;
    } else {
        console.log("Por favor, introduce un número válido.");
    }
}

console.log("La suma de los números ingresados es: " + add);
