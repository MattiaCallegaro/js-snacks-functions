/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function ciao(name){
    return "Ciao" + name
}

// Invoca la funzione qui e stampa il risultato in console

ciao(userName);
console.log(ciao(" " + userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
