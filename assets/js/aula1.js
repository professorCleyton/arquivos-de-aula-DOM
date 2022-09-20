/*
Primeira brincadeira pegando um conteúdo do navegador
*/
let paragrafos = document.getElementsByTagName("p"); // Pegando todos os elementos <p> do documento
//console.log(paragrafos[0]); // Armazena num vetor e exibindo o primeiro <p> encontrado
//console.log(paragrafos[0].innerText); // Acessando uma propriedade innerText
//console.log(paragrafos[0].nodeName); // Exibindo o nome do nó do elemento 

let divs = document.getElementsByTagName('div');
//console.log(divs);

let tituloPorId = document.getElementById('titulo-principal');
//console.log(tituloPorId.textContent);

let pegandoInputPorId = document.getElementById('nome-usuario-aplicacao');
// console.log(pegandoInputPorId.value);

let elementoPorClasse = document.getElementsByClassName('row');
console.log(elementoPorClasse[0].childElementCount);

