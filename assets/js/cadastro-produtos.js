let elementoCodigo = document.getElementById("codigo-produto");
let elementoNome = document.getElementById("nome-produto");
let elementoDescricao = document.getElementById("descricao-produto");
let elementoPreco = document.getElementById("preco-produto");
let elementoBotaoSalvar = document.getElementById("botao-salvar");
let elementoBotaoConcluir = document.getElementById("botao-concluir");
let arrayProdutos = [];

// Essa função limpando o formulário para inserir mais um produto
function limparFormulario() {
  elementoCodigo.value = "";
  elementoNome.value = "";
  elementoDescricao.value = "";
  elementoPreco.value = "";
}

// Verifica se os campos obrigatórios no formulário estão preenchidos
function camposObrigatoriosPreenchidos(codigo, nome, preco) {
  // Retorna um booleano
  if (codigo !== "" && nome !== "" && preco !== "") {
    return true;
  }
  return false;
}

// Exibe uma mensagem para o usuário na tela
function exibirMensagem (mensagem,classe) { // VOID
    let elementoDivFeedback = document.getElementById('feedback-usuario');
    elementoDivFeedback.innerHTML = mensagem;
    elementoDivFeedback.setAttribute('class',classe);
    elementoDivFeedback.removeAttribute('hidden');
}

function salvarProduto() {
  // Função normal
  // Recebeu em variaveis os valores do input no momento do click
  let valorCodigo = elementoCodigo.value;
  let valorNome = elementoNome.value;
  let valorDescricao = elementoDescricao.value;
  let valorPreco = elementoPreco.value;
  // Validando prenchimento dos campos
  let camposPreenchidos = camposObrigatoriosPreenchidos(
    valorCodigo,
    valorNome,
    valorPreco
  );

  if (camposPreenchidos) {
    // Modelo de objeto que representa o produto
    let produto = {
      codigo: valorCodigo,
      nome: valorNome,
      descricao: valorDescricao,
      preco: valorPreco,
    };
    // Salvando no meu array um objeto
    arrayProdutos.push(produto);
    //Zerando o formulário
    limparFormulario();
    exibirMensagem('Produto cadastrado com sucesso!','alert alert-success');
  }else{
    exibirMensagem('Campos obrigatórios não estão preenchidos!','alert alert-danger');
  }

}

// Chamada pelo forEach
function exibirProdutos(elemento, chave) {
  let linha = `<tr>
                <th scope="row">${elemento.codigo}</th>
                <td>${elemento.nome}</td>
                <td>${elemento.descricao}</td>
                <td>${elemento.preco}</td>
              </tr>`;
  let tBodyElemento = document.getElementById("lista-produtos");
  tBodyElemento.innerHTML += linha;
  // Tem que exibir nossos produtos na lista
  console.log(chave, elemento.codigo);
  console.log(chave, elemento.nome);
}

function concluirCadastro () {
  // Arrow Function
  let elementoSecaoCadastramento = document.getElementById(
    "cadastramento-produtos"
  );
  let elementoSecaoListagem = document.getElementById("listagem-produtos");
  // Controlando a exbição das seções
  elementoSecaoCadastramento.setAttribute("class", "inativo"); // Colocou um atributo de classe no html (inativo)
  elementoSecaoListagem.setAttribute("class", "ativo"); // Colocou um atributo de classe no html (ativo)
  arrayProdutos.forEach(exibirProdutos); // FOREACH
};

elementoBotaoSalvar.addEventListener("click", salvarProduto);
elementoBotaoConcluir.addEventListener("click", concluirCadastro);
