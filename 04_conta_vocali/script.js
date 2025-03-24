/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function listaVocali(string) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let risultato = 0;

    for (let i = 0; i < string.length; i++){
        if(vocali.includes(string[i].toLowerCase())){
            risultato++;
        }
    }
    return risultato;
}
// Invoca la funzione qui e stampa il risultato in console
const numeroVocali = listaVocali(word);
console.log(numeroVocali); 


//Risultato atteso se si passa 'javascript': 3 (a, a, i)