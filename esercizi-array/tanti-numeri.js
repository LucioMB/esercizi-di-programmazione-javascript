/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

function media(x) {
  let a = x.reduce((tot, unit) => tot + unit);
  let b = x.length;
  let media = a / b;
  let min = x.sort((y, z) => y - z).filter(v => v < media)
  let max = x.sort((y, z) => y - z).filter(v => v > media)
  console.log('La media è: ' + media + ', ' + 'valori minori della media: ' + '[' + min + ']' + ', ' + 'valori maggiori della media: ' + '[' + max + ']')
}
media([3, 5, 10, 2, 8])

//usando i backtick

function media(x) {
  let a = x.reduce((tot, unit) => tot + unit);
  let b = x.length;
  let media = a / b;
  let min = x.sort((y, z) => y - z).filter(v => v < media)
  let max = x.sort((y, z) => y - z).filter(v => v > media)
  console.log(`La media è: ${media}, valori minori della media: [${min}], valori maggiori della media: [${max}]`)
}
media([3, 5, 10, 2, 8])
