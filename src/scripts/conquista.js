const conquistas = document.getElementsByClassName("conquista");

async function init() {
  const jogador = await statusJogador();
  console.log(jogador);

  if (jogador.nivel == 1) {
    conquistas[0].classList.add("bloqueada");
  }

  if (jogador.nivel <= 2) {
    conquistas[1].classList.add("bloqueada");
  }

  if (jogador.icon == "terno") {
    conquistas[2].classList.add("bloqueada");
  }
}

init();
