/*Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

Bonus:
crea un peperone con una funzione*/

const orto = []
sum = 0
for(let i=0; i<10;i++){
    let peperone = {
        varieta: "peperono tipo" + Math.floor(Math.random()*(3)+1),
        "peso in kg": Math.floor(Math.random()*(5)+1),
        "lunghezza in cm" : Math.floor(Math.random()*(15)+1),
    }
    sum = sum + parseInt(peperone["peso in kg"])
    orto.push(peperone)
}

console.log(orto)
console.log(sum)