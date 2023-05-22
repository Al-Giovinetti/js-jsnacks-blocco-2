//Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
//Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
//Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

//Genero un numero random
 let pcRandom = parseInt(Math.floor(Math.random()*( 100 + 1)))
 //console.log(pcRandom +"numero computer")

// Creo un contatore
let contatore = 0

let indovinato = false
//Vai avanti finchè indovinato rimane folse
while(indovinato == false) {

    let myNumber = parseInt(prompt("Inserisci un numero da 1 a 100"))
    console.log(myNumber)

    if(myNumber == pcRandom){
        console.log("hai indovinato")
        indovinato = true
    }else if(myNumber > pcRandom){
        console.log("piu piccolo")
    }else{
        console.log("più grande")
    }
    contatore = contatore + 1
}

console.log("Per indovinare c hai messo "+ contatore +" volte")


    