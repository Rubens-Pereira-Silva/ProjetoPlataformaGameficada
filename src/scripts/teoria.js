const atividade = JSON.parse(localStorage.getItem("atividade"));
let atividadeNumero = 0;

console.log(atividade);

//Atualiza a tela com a teoria da atividade escolhida
function attAtividade() {
  //muda o nome
  document.getElementById("nome").innerText = atividade.nome;

  //muda o texto
  document.getElementById("texto").innerText =
    atividade.teoria[atividadeNumero];
}
attAtividade();

async function mudarPagina(lado) {
  if (lado == 1) {
    if (atividadeNumero != 0) {
      atividadeNumero -= 1;
    }
  } else {
    if (atividadeNumero == atividade.teoria.length - 1) {
      await concluirAtividade(atividade.nivel);
      alert("Terminou a atividade");
      window.location.replace("atividades.html");
    } else {
      atividadeNumero += 1;
    }
  }
  console.log(atividadeNumero);
  attAtividade();
}
