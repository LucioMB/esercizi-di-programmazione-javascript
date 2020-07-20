/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

function day(x) {
  let a = x >= 1 && x <= 7 ? true : false;
  let b = a === true && x === 1 ? 'Lunedì' : a === true && x === 2 ? 'Martedì' :  a === true && x === 3 ? 'Mercoledì' : a === true && x === 4 ? 'Giovedì' : a === true && x === 5 ? 'Venerdì' : a === true && x === 6 ? 'Sabato' :  a === true && x === 7 ? 'Domenica' : 'Peccato non posso indovinare il giorno';
  console.log(b)
}
day(2)
