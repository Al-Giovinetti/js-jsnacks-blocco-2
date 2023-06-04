//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arreyList = [];

let sum=0;

while(sum <= 49){
   let userNumber = parseInt(prompt("dammi un numero"));
   if(sum+userNumber >= 50){
        console.log("serve un numero più piccolo - 49 superato")
   }else if(sum+userNumber==49){
      console.log("49, sei arrivato")
   }else{
    sum = sum + userNumber
    arreyList.push(userNumber)
    console.log(sum)
   }
   
}

console.log(arreyList)

