/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

function temp(gradi) {
  let a = gradi.sort((x, y) => x - y);
  let max = a.pop();
  let min = a.shift();
  console.log(`La giornata più calda ha registrato ${max} gradi, quella più fredda ${min} gradi`)
}
temp([a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7])
