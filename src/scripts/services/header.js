//Funcionamento do modal
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
