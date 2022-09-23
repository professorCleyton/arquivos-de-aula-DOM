// let resgatandoBotao = document.getElementById('botao-valida');
let resgatandoBotao = document.querySelector('.btn');
let elementoCpf = document.getElementById('cpf-usuario');
let elementoFeedback = document.getElementById('feedback-usuario');
let elementoLista = document.getElementById('lista-cpf');

function validaCpf(cpf){ // RETORNO BOLEANO
    if(cpf.length ==11){
        return true;
    }
    return false;
}

function exibirMensagem(mensagem){ // VOID
    elementoFeedback.innerHTML = mensagem;
    elementoFeedback.removeAttribute('hidden');
}

resgatandoBotao.onclick = () =>{
    let valorCpf = elementoCpf.value; // Capturando o valor
    valorCpf = valorCpf.toString();  // Conversão para String
    let cpfValido = validaCpf(valorCpf); // Chamando uma função para validar CPF
    if(cpfValido){
        exibirMensagem("CPF Válido!"); // Chama a função para exibir a mensagem embaixo do input
        elementoLista.innerHTML += `<li>${valorCpf}</li>`; // Preenche a lista de forma concatenada
        //elementoLista.innerHTML += '<li>'+valorCpf+'</li>'; // Outro jeito de concatenar
    }else{
        exibirMensagem("CPF Inválido!");// Chama a função para exibir a mensagem embaixo do input
    }
  
}