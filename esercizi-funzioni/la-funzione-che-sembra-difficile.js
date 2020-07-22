/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/

function find(N, K) {
  let a = N.toString().slice(K, K+1)
  let b = N.toString().length
  console.log(Number(b < K ? 0 : a))
}
find(123456, 3)
