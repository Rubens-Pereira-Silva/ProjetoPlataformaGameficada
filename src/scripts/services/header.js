//Header

const header = document.getElementById("header")

header.innerHTML = `
  <button onclick="" id="btnPerfil">
        <img src="../images/perfil.png" alt="" />
      </button>
      <button onclick="" id="btnLoja">
        <img src="../images/loja.png" alt="" />
      </button>
      <button onclick="" id="btnLeaderboard">
        <img src="../images/podio.png" alt="" />
      </button>
      <button onclick="" id="btnConfig">
        <img src="../images/configuracao.svg" alt="" />
      </button>
`



/*Funcionamento do modal
const btnConfig = document.getElementById("btnConfig");
const btnFecharConfig = document.getElementById("btnFecharConfig");

const configDialog = document.getElementById("configDialog");

//Quando começar garantir que o dialog esta fechado
configDialog.close();

btnConfig.onclick = () => {
  criarInputListaTemas();
  configDialog.showModal();
};
btnFecharConfig.onclick = () => configDialog.close();

//Sistema de logout da conta
const btnLogout = document.getElementById("btnLogout");

btnLogout.onclick = () => {
  localStorage.removeItem("ID");
  window.location.replace("login.html");
};

//Sistema de troca de temas
const listaTemas = [
  "light",
  "lightblue",
  "dark",
  "darkgreen",
  "darkblue",
  "darkpurple",
];

const inputListaTemas = document.getElementById("lista-temas");

function criarInputListaTemas() {
  const temaAtual = localStorage.getItem("Tema");

  listaTemas.innerHTML = "";

  listaTemas.forEach((tema) => {
    if (temaAtual == tema) {
      inputListaTemas.innerHTML += `<option value="${tema}" selected>${tema}</option>`;
    } else {
      inputListaTemas.innerHTML += `<option value="${tema}">${tema}</option>`;
    }
  });
}
//Quando o valor do input mudar ele muda e salva o novo tema escolhido
inputListaTemas.addEventListener("change", (event) => {
  const novoTema = event.target.value;

  localStorage.setItem("Tema", novoTema);

  document.body.className = novoTema;
});
*/

//Navegação Perfil
const btnPerfil = document.getElementById("btnPerfil")

btnPerfil.onclick = () => {
  window.location.replace("perfil.html")  
}

//Navegação Leaderboard
const btnLeaderboard = document.getElementById("btnLeaderboard")

btnLeaderboard.onclick = () => {
  window.location.replace("leaderboard.html")
}

//Navegação Loja
const btnLoja = document.getElementById("btnLoja")

btnLoja.onclick = () => {
  window.location.replace("loja.html")
}