/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

function voto(v) {
  if (v < 18) {
    console.log('Insufficiente');
  } else if (v < 21){
    console.log('Sufficiente');    
	} else if (v < 24) {
    console.log('Buono');
  } else if (v < 27) {
    console.log('Distinto');
  } else if (v <= 29) {
    console.log('Ottimo');
  } else if (v == 30) {
    console.log('Eccellente');
  } else {
    console.log('Voto non valido!!');
  }
}
voto(21)
