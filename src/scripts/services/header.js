//Aplica o tema escolhido
document.body.className = localStorage.getItem("Tema");
//Header

const header = document.getElementById("header");

header.innerHTML = `
      <button onclick="" id="btnPerfil">
        <img src="../images/perfil.png" alt="" />
      </button>
      <button onclick="" id="btnAtividades">
        <img src="../images/atividades.png" alt="" />
      </button>
      <button onclick="" id="btnEventos">
        <img src="../images/eventos.png" alt="" />
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
`;

//Navegação Perfil
const btnPerfil = document.getElementById("btnPerfil");

btnPerfil.onclick = () => {
  window.location.replace("perfil.html");
};

//Navegação Atividades
const btnAtividades = document.getElementById("btnAtividades");

btnAtividades.onclick = () => {
  window.location.replace("atividades.html");
};

//Navegação Eventos
const btnEventos = document.getElementById("btnEventos");

btnEventos.onclick = () => {
  window.location.replace("eventos.html");
};

//Navegação Leaderboard
const btnLeaderboard = document.getElementById("btnLeaderboard");

btnLeaderboard.onclick = () => {
  window.location.replace("leaderboard.html");
};

//Navegação Loja
const btnLoja = document.getElementById("btnLoja");

btnLoja.onclick = () => {
  window.location.replace("loja.html");
};

//Navegação COnfiguração
const btnConfig = document.getElementById("btnConfig");

btnConfig.onclick = () => {
  window.location.replace("configuração.html");
};
