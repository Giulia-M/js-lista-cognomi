//acquisizione input: chiedi all’utente il cognome
var inputUtente = prompt("Scrivi il tuo cognome");

//validare il dato in entrata
if (!inputUtente) {
    alert("Dato obbligatorio. Scrivi il tuo cognome")
} else {
    // array con altri cognomi
    var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

    //il cognome dell'utente lo voglio inserire nell'array con altri cognomi
    listaCognomi.push(inputUtente)

    // stampa la lista ordinata alfabeticamente
    //CONTROLLO SUL MINUSCOLO -MAIUSCOLO? 
     
    /*var listaUpperCase = String(listaCognomi).toUpperCase().split(",");
    var sorted = listaUpperCase.sort();
    console.log(sorted);*/

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

        // utilizzo l'IF per capire il posizionamento del cognome che scriverà l'utente 
        if (elementoDaAnalizzare === inputUtente) {
            posizioneUtente = i + 1;
        }

        // lo scrivo alla fine i++ perchè in questo modo l'incremento viene dopo avere fatto l'analisi nell'IF 
        i++

    }

    console.log("Il cognome " + inputUtente + " si trova in posizione " + posizioneUtente);
    
}


