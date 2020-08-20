/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

function menu(a) {
  console.log('<p> MENU: </p><p>1. Tiramisù </p><p>2. Torta della nonna </p><p>3. Cheesecake alla nutella </p><p>4. Macedonia </p>' + (
    a === 1 ? 'Hai scelto il dolce Tiramisù' : a === 2 ? 'Hai scelto il dolce Torta della nonna' : a === 3 ? 'Hai scelto il dolce Cheesecake alla nutella' : 
    a === 4 ? 'Hai scelto il dolce Macedonia' : 'Dolce non disponibile'))
  
  document.write('<p> MENU: </p><p>1. Tiramisù </p><p>2. Torta della nonna </p><p>3. Cheesecake alla nutella </p><p>4. Macedonia </p>' + (
    a === 1 ? 'Hai scelto il dolce Tiramisù' : a === 2 ? 'Hai scelto il dolce Torta della nonna' : a === 3 ? 'Hai scelto il dolce Cheesecake alla nutella' : 
    a === 4 ? 'Hai scelto il dolce Macedonia' : 'Dolce non disponibile'))
}
menu(3)
