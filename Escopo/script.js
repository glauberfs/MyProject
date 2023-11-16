// Variaveis declaradas dentro de funções não são acessadas fora das mesmas

function mostrarCarro() {
  var carro = "Palio";
  console.log(carro);
}

mostrarCarro(); // Palio no console
console.log(carro); // Erro, carro is not defined

// Por qual motivo o codigo abaixo retorna erro?

{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?

const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// Oque fazer para o total retornar 500?

const numero = 50;
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
const total = 10 * numero;
console.log(total);
