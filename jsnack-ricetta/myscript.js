const boxingrediente = document.querySelector("input")
const btnAggiungi = document.getElementById("btn-aggiungi")
const btnPiatto = document.getElementById("btn-piatto")
const listaIngredienti = document.querySelector("ul")
const imgbox = document.querySelector("div")

let contatore=0
let premuto=false

    btnAggiungi.addEventListener("click",function(){
        if(premuto==false){
            const ingrediente = document.createElement("li")
            ingrediente.innerHTML=(boxingrediente.value)
            listaIngredienti.appendChild(ingrediente)
            boxingrediente.value=" "
            contatore=contatore+1
        }
    })
    btnPiatto.addEventListener("click",function(){
        if(contatore>=2){
            imgbox.innerHTML=`<img src="https://picsum.photos/350/500?grayscale" alt="random img">`
            premuto=true
        }
    })