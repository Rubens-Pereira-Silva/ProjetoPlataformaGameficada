// constantes com os elementos html
const sectionAtividades = document.getElementById("atividades");

// consts modal
const teoriaDialog = document.getElementById("teoriaDialog");
const teoriaModalParagrafo = document.getElementById("teoriaModalParagrafo");
const teoriaModalTitulo = document.getElementById("teoriaModalTitulo")

let atividades = pegarAtividades();

let atividadeAtual;
let atividadeAtualNumero;
let numeroAtividadeAtual = 0;

function verificarNivel(nivelAtt) {
  const jogador = statusJogador();
  if (jogador.nivel >= nivelAtt) {
    return true;
  }
  return false;
}
//Botões de abrir os models
function btnteoria(nivelAtt) {
  if (verificarNivel(nivelAtt)) {
    atividadeAtualNumero = nivelAtt
    numeroAtividadeAtual = 0
    console.log("Botão de teoria precionado");
    atividadeAtual = atividades[nivelAtt];
    teoriaDialog.showModal();
    document.body.style.overflow = "hidden";
    attModal();
  }
}
function btnpratica(nivelAtt) {
  if (verificarNivel(nivelAtt)) {
    console.log("Botão de pratica precionado");
  }
}

//funções do modal
function btnfecharModal() {
  numeroAtividadeAtual = 0;
  teoriaDialog.close();
  document.body.style.overflow = "auto";
}
function attModal() {
  teoriaModalParagrafo.innerText = atividadeAtual.teoria[numeroAtividadeAtual];
  teoriaModalTitulo.innerText = atividadeAtual.nome
}
function mudarPaginaTeoria(lado) {
  if(lado == 2 && numeroAtividadeAtual == atividadeAtual.teoria.length - 1){
    addMoedaTeoria(10, atividadeAtualNumero)
    addNivelJogador(atividadeAtualNumero)
    btnfecharModal()
    return;
  }
  if (lado == 1 && numeroAtividadeAtual > 0) {
    numeroAtividadeAtual -= 1;
  }
  if (lado == 2 && numeroAtividadeAtual < atividadeAtual.teoria.length - 1) {
    numeroAtividadeAtual += 1;
  }
  console.log(numeroAtividadeAtual +"    "+ atividadeAtual.teoria.length)
  attModal();
}

function init() {
  for (let i = 0; i < atividades.length; i++) {
    const atividade = atividades[i];

    sectionAtividades.innerHTML += `
      <button onClick="btn${atividade.type}(${i})" class="atividade">
          <div class="circuloAtividade ${atividade.type}">
            <img src="../images/${atividade.icon}" alt="" />
          </div>
          <p>${atividade.nome}</p>
        </button>
    `;
  }
}
init();
