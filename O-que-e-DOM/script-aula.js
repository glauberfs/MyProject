// Retrone no console todas imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que comecem com a palavra imagem
const animaisImagem = document.querySelectorAll(
  'img[src^="../Animais-Fantasticos/img/imagem"]'
);
console.log(animaisImagem);

// Selecione todos links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primero h2 dentro de .aimais-descricao
const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);

// Selecione o ultimo p do site
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo[paragrafo.length - 1]);
