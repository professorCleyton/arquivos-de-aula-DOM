let cpfUsuario = document.getElementById('cpf-usuario');
let feedbackPositivo = document.getElementById('feedback-positivo');
let feedbackNegativo = document.getElementById('feedback-negativo');
let clicouNoBotao = () => console.log("Clicou!");
let segundoBotao = document.getElementById("botao-valida");

segundoBotao.onclick = () => {
  let cpf = cpfUsuario.value;
  
  let validaCpf = (cpfRecebido) => {
    if(cpfRecebido.toString().length==11){
      feedbackNegativo.setAttribute('hidden','true');
      feedbackPositivo.removeAttribute('hidden');
    }else{
      feedbackPositivo.setAttribute('hidden','true');
      feedbackNegativo.removeAttribute('hidden');
    }
  }

  validaCpf(cpf);
};
