console.log("JS OK");

// step 1: dichiaro variabili e richiedo valore all'utente tramite prompt

const percorrenzaKm = parseInt(prompt("Quanti chilometri hai intenzione di percorrere?", 150));
const etaPasseggero = parseInt(prompt("Qual è la sua età?", 17));

console.log("percorrenza Km ", percorrenzaKm, "età passeggero ", etaPasseggero);

// Step 2: creo formula per calcolare prezzo intero del biglietto

const tariffaKm = 0.21;
const prezzoBase = percorrenzaKm * tariffaKm;

console.log("Tariffa base ", prezzoBase);

// Step 3: applico sconto in base alla fascia d'età

    // Step 3.1 stabilisco condizione di sconto

    let sconto;

    // Step 3.2 formula prezzo finale con sconto

    if (etaPasseggero < 18) {
       
        let sconto = 0.8;
        console.log ("sconto", sconto);
       
        const prezzoFinale = parseFloat (prezzoBase * sconto).toFixed(2);
        console.log ("prezzo finale", prezzoFinale);

    } else if (etaPasseggero >= 65) {
        
        let sconto = 0.6;
        console.log ("sconto", sconto);
        
        const prezzoFinale = parseFloat (prezzoBase * sconto).toFixed(2);
        console.log ("prezzo finale", prezzoFinale);
    } else {
        
        let sconto = 1;
        console.log ("sconto", sconto);
        
        const prezzoFinale = parseFloat (prezzoBase * sconto).toFixed(2);
        console.log ("prezzo finale", prezzoFinale);
    }
    

