/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

function time(x) {
  let o = parseInt(x / 3600);
  let m = parseInt((x - (3600 * o)) / 60);
  let s = x - (3600 * o) - (60 * m)
  console.log(o + ' ore, ' + m + ' minuti e ' + s + ' secondi')
}
time(12560)
