/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

function random(min, max) {
  let mi = Math.ceil(min)
  let ma = Math.ceil(max)
  let a = Math.ceil(Math.random() * (ma - mi))
  console.log(a)
}
random(0, 100)
