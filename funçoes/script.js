// Crie uma função que verifica se um numero é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função que retorne o tipo de dado
function tipoDeDado(dado) {
  return typeof dado;
}

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${(totalPaises = paisesVisitados)} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

precisoVisitar(20);
