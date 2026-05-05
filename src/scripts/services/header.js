const btnConfig = document.getElementById("btnConfig");
const btnLogout = document.getElementById("btnLogout");
const btnFecharConfig = document.getElementById("btnFecharConfig");

const configDialog = document.getElementById("configDialog");

//quando começar garantir que o dialog esta fechado
configDialog.close();

btnConfig.onclick = () => configDialog.showModal();
btnFecharConfig.onclick = () => configDialog.close();

btnLogout.onclick = () => {
  localStorage.removeItem("ID");
  window.location.replace("login.html");
};
