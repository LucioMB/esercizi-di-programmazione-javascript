/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/

function tickTack(x) {
  for (let i = x-1; i >= 0; i--) {
    console.log(i)
  }
}
tickTack(12);
