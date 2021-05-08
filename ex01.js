var ent = prompt("Informe o valor total: "); //576.
var result = 0;
var recebe;
var ced = [100, 50, 20, 10, 5, 2, 1];

function calculaNota(nota, valor) {

  if (valor >= nota ) {
    result = parseInt( (valor / nota) );
    ent = valor - (result*nota);
    return result;
  } else {
     return result = 0;
  }
}

function imprimeNota() {
    for (var i=0; i <= 6; i++) {
        console.log( calculaNota(ced[i], ent) + " nota(s) de R$ " + ced[i] + ",00");
    }
}

imprimeNota();
