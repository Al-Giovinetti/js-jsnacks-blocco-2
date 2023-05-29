const giocatore = {
    "cod giocatore":getUppercase() + Math.floor(Math.random()*(11)) + Math.floor(Math.random()*(11)) + Math.floor(Math.random()*(11)),
    nome: "Alino",
    età: "41",
    "media punti p/p" :Math.floor(Math.random()*(51)) ,
    "% successo tiri 3 punti": Math.floor(Math.random()*(101)) ,
    stoppate: Math.floor(Math.random()*(30)) ,
    tiri: Math.floor(Math.random()*(100 - 20 +1)-20) ,
}

console.log(giocatore)

function getUppercase(){
    const uppercases = "ABCDEFGHILMNOPQRSTUVZ"
    let uppercase;
    while (uppercase.length == 3){
        for(let i=0; i<uppercases.length;i++){
        uppercase= uppercases.charAt(i)
        }
        return uppercase
    } 
}