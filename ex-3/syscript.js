//calcola la media dei 10 numeri

let sum = 0
let userNumber;
for( let i = 0; i < 10; i++){
    userNumber = parseInt(prompt("dammi un numero"))
    sum += userNumber
}
const media = (sum / 10).toFixed(2)
console.log(media)

