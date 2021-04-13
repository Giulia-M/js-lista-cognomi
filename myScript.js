//acquisizione input: chiedi all’utente il cognome
var inputUtente = prompt("Scrivi il tuo cognome");

//validare il dato in entrata
if (!inputUtente) {
    alert("Dato obbligatorio. Scrivi il tuo cognome")
} else {
    // array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
    var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

    //il cognome scritto dall'utente lo voglio inserire in un array con altri cognomi
    listaCognomi.push(inputUtente)

    // stampa la lista ordinata alfabeticamente
    var sorted = listaCognomi.sort();
    console.log(sorted);

    // scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
    var i = 0


    var containerList = document.getElementById("container_List")


    var posizioneUtente = -1;
    while (i < sorted.length) {
        var elementoDaAnalizzare = sorted[i]
      
       
        containerList.innerHTML += "<li>" + sorted[i] + "</li>";

        console.log(sorted[i])
        

        if (elementoDaAnalizzare === inputUtente) {
            posizioneUtente = i + 1;
        }

        // lo scrivo alla fine i++ perchè in questo modo l'incremento viene dopo avere fatto l'analisi nell'IF 
        i++

    }
    
    console.log("il cognome" + inputUtente + "si trova " + posizioneUtente);
    
}


