//calcola la media dei 10 numeri
const userInput = document.querySelector("input")
const btnCalc = document.querySelector("button")

let sum = 0
btnCalc.addEventListener("click",function(){
    let userNumber;
    for( let i = 0; i < 10; i++){
        userNumber = userInput.value
        sum = sum + userNumber
        console.log(userNumber)
        userNumber= ""
    }
    const media = (sum / 10).toFixed(2)
    console.log(media)
}
);
