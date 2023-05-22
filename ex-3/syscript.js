//calcola la media dei 10 numeri
const userInput = document.querySelector("input")
const btnCalc = document.querySelector("button")

let sum = 0
btnCalc.addEventListener("click",function(){
    for( let i = 0; i < 10; i++){
        let userNumber = parseInt(userInput.value)
        sum = userNumber + sum
        console.log(userNumber)
    }
}
);
const media = sum / 10
console.log(media)