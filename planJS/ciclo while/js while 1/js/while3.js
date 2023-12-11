const limit = 10;
let randomNum;

while (randomNum !== limit) {
    randomNum = Math.floor(Math.random() * 11); 
    console.log("Número aleatorio: " + randomNum);
}
