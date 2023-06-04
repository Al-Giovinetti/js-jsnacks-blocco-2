/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */


const ulElement = document.querySelector("ul")

for(let i = 0; i < 10; i++){
    const liElement = getNewElement("li")
    liElement.innerHTML =i + " ciaoooo"
    ulElement.append(liElement)
}

//FUNCTION//

function getNewElement(tagElement){
    const newElement= document.createElement(tagElement);
    return newElement
}
