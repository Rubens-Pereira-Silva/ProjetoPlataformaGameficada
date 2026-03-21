// constantes com os elementos html
const sectionAtividades = document.getElementById("atividades");

// consts modal
const teoriaDialog = document.getElementById("teoriaDialog");
const teoriaModalParagrafo = document.getElementById("teoriaModalParagrafo");
const teoriaModalTitulo = document.getElementById("teoriaModalTitulo");

const DesafioDialog = document.getElementById("DesafioDialog");
const DesafioModalTitulo = document.getElementById("DesafioModalTitulo");
const DesafioModalPergunta = document.getElementById("DesafioModalPerfunta");

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
    atividadeAtualNumero = nivelAtt;
    numeroAtividadeAtual = 0;
    atividadeAtual = atividades[nivelAtt];
    teoriaDialog.showModal();
    document.body.style.overflow = "hidden";
    attModal();
  }
}
function btnpratica(nivelAtt) {
  if (verificarNivel(nivelAtt)) {
    atividadeAtualNumero = nivelAtt;
    numeroAtividadeAtual = 0;
    atividadeAtual = atividades[nivelAtt];
    DesafioDialog.showModal();
    document.body.style.overflow = "hidden";
    attModalDesafio();
  }
}

//funções do modal

//pagina Teoria
function btnfecharModal() {
  numeroAtividadeAtual = 0;
  teoriaDialog.close();
  DesafioDialog.close();
  document.body.style.overflow = "auto";
}
function attModal() {
  teoriaModalParagrafo.innerText = atividadeAtual.teoria[numeroAtividadeAtual];
  teoriaModalTitulo.innerText = atividadeAtual.nome;
}

let pontuacaoDesafio = 0;

function attModalDesafio() {
  DesafioModalTitulo.innerText = atividadeAtual.nome;
  console.log(atividadeAtual);
  DesafioModalPergunta.innerText =
    atividadeAtual.teoria[numeroAtividadeAtual].pergunta;

  if ((atividadeAtual.teoria[numeroAtividadeAtual].type = "TrueAndFalse")) {
    desafioTrueFalse();
  }
}

function respostaCorreta(btn) {
  if (numeroAtividadeAtual == atividadeAtual.teoria.length - 1) {
    addMoedaTeoria(10, atividadeAtualNumero);
    addNivelJogador(atividadeAtualNumero);

    btnfecharModal();
    return;
  }
  if (btn == atividadeAtual.teoria[0].respostas) {
    pontuacaoDesafio += 1;
    console.log(pontuacaoDesafio);
  }
  numeroAtividadeAtual += 1;
  attModalDesafio();
}

function desafioTrueFalse() {
  DesafioModalPergunta.innerHTML += `
    <div>
      <button onclick="respostaCorreta(1)">True</button>
      <button onclick="respostaCorreta(2)">False</button>
    </div>
  `;
}

function mudarPaginaTeoria(lado) {
  if (lado == 2 && numeroAtividadeAtual == atividadeAtual.teoria.length - 1) {
    addMoedaTeoria(10, atividadeAtualNumero);
    addNivelJogador(atividadeAtualNumero);

    btnfecharModal();
    return;
  }
  if (lado == 1 && numeroAtividadeAtual > 0) {
    numeroAtividadeAtual -= 1;
  }
  if (lado == 2 && numeroAtividadeAtual < atividadeAtual.teoria.length - 1) {
    numeroAtividadeAtual += 1;
  }
  console.log(numeroAtividadeAtual + "    " + atividadeAtual.teoria.length);
  attModal();
}

//pagina Desafio

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
