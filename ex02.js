var count = 0;
var ent; // = gets();

var pos = 0;
var neg = 0;
var par = 0;
var impar = 0;

// 1. Entradas
 for (count; count < 5; count++) {
  ent = parseInt( gets() );
   
   //2. Se for Positivo ou Negativo
  if ( ent > 0 ) {
      pos++;
  } else if ( (ent < 0) && (ent != 0) ) {
      neg++;
  }

  //3. par

   if ( (ent % 2) == 0 ) {
     par++;
   } else {
     impar++;
   }
 }

console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(pos + " valor(es) positivo(s)");
console.log(neg + " valor(es) negativo(s)");
 