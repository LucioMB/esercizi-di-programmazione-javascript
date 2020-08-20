/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

function minMax(m) {
  let a = m.sort((x, y) => x - y)
  let min = a.shift()
  let max = a.pop()
  console.log('Maggiore = ' + max + ',' + ' Minore = ' + min)
}
minMax([3, 8, 1, -7])
