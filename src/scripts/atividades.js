// constantes com os elementos html
const sectionAtividades = document.getElementById("atividades");
const teoriaDialog = document.getElementById("teoriaDialog");

let atividades = pegarAtividades();

function verificarNivel(nivelAtt) {
  const jogador = statusJogador();
  if (jogador.nivel >= nivelAtt) {
    return true;
  }
  return false;
}

function btnteoria(nivelAtt) {
  if (verificarNivel(nivelAtt)) {
    console.log("Botão de teoria precionado");
    teoriaDialog.showModal();
    document.body.style.overflow = "hidden";
  }
}
function btnpratica(nivelAtt) {
  if (verificarNivel(nivelAtt)) {
    console.log("Botão de pratica precionado");
  }
}

function btnfecharModal() {
  teoriaDialog.close();
  document.body.style.overflow = "auto";
}

function init() {
  for (let i = 0; i < atividades.length; i++) {
    const atividade = atividades[i];

    sectionAtividades.innerHTML += `
      <button onClick="btn${atividade.type}(${i + 1})" class="atividade">
          <div class="circuloAtividade ${atividade.type}">
            <img src="/src/images/${atividade.icon}" alt="" />
          </div>
          <p>${atividade.nome}</p>
        </button>
    `;
  }
}
init();
