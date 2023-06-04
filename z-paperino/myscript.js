const randomCaseList = ["PiPPO","pluTo","PAPErino","pluTONio","PAperMaTe"]

const orderCaseList = randomCaseList.map((character) =>{
   let haracter = character.substring(1);
    return character.charAt(0).toUpperCase()+haracter.toLowerCase()
})

console.log(orderCaseList)

