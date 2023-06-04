const carList = []

for(let i = 0; i < 14; i++){
    carList[i] = 
    {
        marca: random3String("alfa","fiat","audi"),
        modello: random3String("utilitaria","coupe","station wagon"),
        alimentazione: random3String("benzina","disel","elettrica")
    }
    carList.push(carList[i]);
}
console.log(carList)

const benzina = []
for(let i = 0; i < carList.length; i++){
    if(carList[i].alimentazione == "benzina"){
        benzina.push(carList[i])
    }
}
console.log(benzina)

const disel = []

carList.forEach((car,index) =>{
    if(car.alimentazione == "disel"){
        disel.push(car)
    }
})
console.log(disel)

const noDiselBenzina = carList.filter((car) => {
    if((car.alimentazione != "disel") && (car.alimentazione != "benzina")){
        return true
    }
    return false
})
console.log(noDiselBenzina)

//function//

function random3String(string1,string2,string3){
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(randomNumber == 3){
        return string1
    }else if( randomNumber == 2){
        return string2
    }else{
        return string3
    }
};