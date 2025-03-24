/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function createNewArray(parola, lettera = "A") {
    let risultato = [];
    for (let i = 0; i < parola.length; i++) {
        if (parola[i].charAt(0).toUpperCase() === lettera.toUpperCase()) {
            risultato.push(parola[i]);
        }
    }

    return risultato;
}
// Invoca la funzione qui e stampa il risultato in console
const nomiConA = createNewArray(names, "A");
console.log(nomiConA);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]