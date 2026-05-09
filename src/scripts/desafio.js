const desafio = JSON.parse(localStorage.getItem("desafio"));
const desafioIds = desafio.teoria.map(Number);

let desafioNumero = 0;
let acertos = 0;
let respostaCorreta;

//Busca os desafios correspondente as atividades
async function buscarDesafios() {
  const res = await fetch(
    "https://projetoplataformaunip-api-1.onrender.com/desafio/get",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(desafioIds),
    }
  );

  const data = await res.json();
  desafio.teoria = data;
  console.log(desafio);
  attAtividade();
}
buscarDesafios();

//Atualiza a tela com o desafio da atividade escolhida
function attAtividade() {
  //Salva a resposta correta da pergunta
  respostaCorreta = desafio.teoria[desafioNumero].resposta[0];

  //muda o nome
  document.getElementById("nome").innerText = desafio.nome;

  //muda o texto
  document.getElementById("texto").innerText =
    desafio.teoria[desafioNumero].pergunta;

  //muda as opções dos botões
  const botoesResposta = document.querySelectorAll("#btnsRespostas button");
  botoesResposta.forEach((botao, index) => {
    botao.innerText = `${desafio.teoria[desafioNumero].resposta[index]}`;
  });
}

function selecionarResposta(num) {
  if (respostaCorreta == desafio.teoria[desafioNumero].resposta[num]) {
    acertos += 1;
  }

  desafioNumero++;
  if (desafioNumero == desafio.teoria.length) {
    if (acertos >= desafio.teoria.length / 2) {
      alert("Ganhou");
    } else {
      alert("Perdeu");
    }
    window.location.replace("atividades.html");
  }
  attAtividade();
}
