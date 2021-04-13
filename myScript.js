//acquisizione input: chiedi all’utente il cognome
var inputUtente = prompt("Scrivi il tuo cognome");

//validare il dato in entrata

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

while (i < sorted.length) {

    containerList.innerHTML += "<li>" + sorted[i] + "</li>";
    
    i++

}