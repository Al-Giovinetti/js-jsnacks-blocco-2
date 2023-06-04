carlist = []

for ( let i = 0; i < 15; i++){
    let car = carlist[i]
    car = {
        marca: "fiat",
        modello: "cabrio",
        alimentazione:"benzina",
    }
    carlist.push(car)
}

console.log(carlist)

for(let i = 0; i < carlist.length;i++){

    const car = carlist[i]
    if(car.alimentazione == benzina){
        benzina.push(car)
    }
}
console.log(benzina)

carlist.forEach(x => {
    console.log   
});