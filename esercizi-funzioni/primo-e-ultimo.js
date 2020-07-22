/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

function minMax(a, b, c) {
  console.log(`minore = ${Math.min(a, b, c)}, maggiore = ${Math.max(a, b, c)}`);
}
minMax(-120, -6, 800);

// Variante

function minMax(arr) {
  let arr2 = arr.sort((x, y) => x - y);
  let min = arr2.shift();
  let max = arr2.pop();
  console.log(`minore = ${min}, maggiore = ${max}`);
}
minMax([-120, -6, 800, 523, 1009, -362]);
