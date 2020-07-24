/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

function cifre(n) {
  let a = n.toString().length
  console.log(a === 1 ? a + ' cifra' : a + ' cifre')
}
cifre(59)
