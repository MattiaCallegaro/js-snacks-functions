/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function createNewArray(parola){
    let nuovoArray= [];
    for(let i=0; i < parola.length; i++ ){
       nuovoArray.push(parola[i].charAt(0));
    }

    return nuovoArray;
}
// Invoca la funzione qui e stampa il risultato in console
createNewArray(names);
console.log(createNewArray(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]