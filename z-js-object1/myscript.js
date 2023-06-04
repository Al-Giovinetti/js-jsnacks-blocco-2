const player ={
    cod:getRandomLetters(3).toUpperCase() + randomNumber(9,1) + randomNumber(9,1) + randomNumber (9,1),
    name:"Pippo",
    surname:"Cognome",
    age:39,
    "media punti p/p":randomNumber(50,0),
    "% punti da 3":randomNumber(100,0),
    stoppate:randomNumber(30,0),
    tiri:randomNumber(100,20)
}

for(let key in player){
    console.log(player[key])
}

function getRandomLetters(howManyLetters){
    const alphabet = "abcdefghilmnopqrstuvz"
    let result =""
    while(result.length < howManyLetters){
        const random = Math.floor(Math.random() * (alphabet.length - 1 + 1) + 1);
        result = result +  alphabet.charAt(random)
    }
    return result
}

function randomNumber(max,min){
    const random = Math.floor(Math.random() * (max - min + 1) + min); 
    return random
}


