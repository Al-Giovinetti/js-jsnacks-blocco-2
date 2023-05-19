//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arreyList=[]

let sum=0

while(sum < 50){
    let userNumber = parseInt(prompt("Give me a number"));
    arreyList.push(userNumber);
    sum = sum + parseInt(userNumber)
    console.log(arreyList)
}

