function pair(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let numeroEvaluado = 7;
if (pair(numeroEvaluado)) {
    console.log(numeroEvaluado + " es un número par.");
} else {
    console.log(numeroEvaluado + " no es un número par.");
}
