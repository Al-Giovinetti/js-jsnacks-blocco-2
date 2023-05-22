//Creo 2 variabili con prompt
const parolaUno= prompt("inserisci la parola 1")
const parolaDue= prompt("inserisci la parola 2")

if(stessalunghezza(parolaUno,parolaDue)){
    console.log("sono lunghe uguali")
}else if(parolaUno.length>parolaDue.length){
    console.log("la prima è più lunga")
}else{
   console.log("la seconda è più lunga")
}
/**Funzione per decidere quale parola è più lunga
 * 
 * @param parolaA
 * @param parolaB
 * @returns 
 */
function stessalunghezza(parolaA,parolaB){
    if(parolaA.length === parolaB.length){
        return true
    }else{
        return false
    }
}
/*Il risulato della funzione viene sostituita a quando viene invocata
riga 5 stessalunghezza(parolaUno,parolaDue)== true o false */
