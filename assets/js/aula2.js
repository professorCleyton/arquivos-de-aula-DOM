
/* DOCUMENT */
// Propriedades
document.body; // Retorna todos elementos dentro do body
document.childElementCount; // Conta quantos elementos filhos(nodes) o elemento possui
document.body.childElementCount; // outro exemplo
document.children; // Busca os elementos filhos o elemento possui
document.body.children; // Outro exemplo
document.documentURI; // Recupera a URL da página que foi carregada

//Métodos
document.getElementById(); // Retorna a referência do elemento através do seu ID
document.getElementsByClassName(nomes);// Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada
document.createElement(nomeDaTag);// Em um documento HTML, o método Document.createElement() cria o elemento HTML especificado


//Nodes
/*
É uma interface da qual diversos tipos do DOM herdam, e que permite que esses tipos 
sejam tratados de forma similar, 
por exemplo, herdando os mesmos métodos ou sendo testados da mesma forma.
*/

//NodeList
/*
Objetos NodeList são coleções de nodos semelhantes aos objetos retornados 
pelos métodos Node.childNodes e document.querySelectorAll().
*/
const myNodeList = document.querySelectorAll("p"); // Exemplo Nodelist de paragrafos

// Element
/*
A interface Element é a classe base mais geral da qual todos os objetos em um Document herda
*/
const element = document.getElementById("idEspecifico");



