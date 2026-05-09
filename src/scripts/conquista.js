const conquistas = document.getElementsByClassName("conquista");

async function init() {
  const jogador = await statusJogador();
  console.log(jogador);

  //Complete a primeira atividade
  if (jogador.nivel == 1) {
    conquistas[0].classList.add("bloqueada");
  }
  //Complete o primeiro desafio
  if (jogador.nivel <= 2) {
    conquistas[1].classList.add("bloqueada");
  }
  //Compre um icone diferente na loja
  if (jogador.icon == "terno") {
    conquistas[2].classList.add("bloqueada");
  }
  //Conclua 5 atividades
  if (jogador.nivel <= 5) {
    conquistas[3].classList.add("bloqueada");
  }
}

init();
