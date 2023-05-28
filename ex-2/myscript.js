//Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
//Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
//Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

//Genero un numero random
 let pcRandom = parseInt(Math.floor(Math.random()*( 100 + 1)))
 //console.log(pcRandom +"numero computer")

// Creo un contatore
let contatore = 0

const pcNumber = Math.floor(Math.random()*(100-1+1)-1)
console.log(pcNumber)

let trovato = false
while(trovato==false){
    let userNumber = prompt("dammi un numero")
    let difference ;

    if (userNumber>=pcNumber){
        difference = userNumber - pcNumber
    }else{
        difference = pcNumber - userNumber
    }

    let status;
    if(difference < 10){
        status = "fuoco"
    }else if( difference < 20){
        status = "fuochino"
    }else{
        status = "acqua"
    }

    if(pcNumber == userNumber){
        console.log(userNumber + " numero indovinato")
        trovato = true
    }else if(userNumber > pcNumber){
        console.log(status)
        console.log(userNumber + " Il numero da indovinare è più piccolo")
        contatore=contatore+1
    }else{
        console.log(userNumber + " Il numero da indovinare è più grande")
        console.log(status)
        contatore=contatore+1
    }
}
console.log("per indovinare ci sono voluti "+ contatore + "tentativi")


    