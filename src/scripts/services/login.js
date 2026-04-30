const url = "https://projetoplataformaunip-api-1.onrender.com";

//Trocar tema
let tema = 0;
function trocarTema() {
  const listaTemas = ["light", "dark", "rose", "roxo"];
  document.body.classList.remove(listaTemas[tema]);
  tema++;
  if (tema >= listaTemas.length) {
    tema = 0;
  }
  document.body.classList.add(listaTemas[tema]);
}

async function login(email, senha) {
  const res = await fetch(url + "/usuario/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
  });

  const data = await res.json();

  if (data != null) {
    localStorage.setItem("ID", data);
    console.log(localStorage.getItem("ID"));
    open("/src/pages/atividades.html");
  } else {
    localStorage.removeItem("ID");
  }
}

async function create(nome, email, senha1, senha2) {
  if (senha1 == senha2) {
    const res = await fetch(url + "/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha1,
      }),
    });

    login(email, senha1);
  }
}

const form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginEmailInput = document.getElementById("login-email-input").value;
  const loginSenhaInput = document.getElementById("login-senha-input").value;

  login(loginEmailInput, loginSenhaInput);
});

const formCriar = document.getElementById("create-form");

formCriar.addEventListener("submit", function (event) {
  event.preventDefault();

  const createNomeInput = document.getElementById("create-nome-input").value;
  const createEmailInput = document.getElementById("create-email-input").value;
  const createSenhaInput1 = document.getElementById(
    "create-senha-input1"
  ).value;
  const createSenhaInput2 = document.getElementById(
    "create-senha-input2"
  ).value;

  create(
    createNomeInput,
    createEmailInput,
    createSenhaInput1,
    createSenhaInput2
  );
});

let inTelaLogin = true;

const titulo = document.getElementById("titulo");
const btnTrocarTela = document.getElementById("btn-trocarTela");

function trocarTela() {
  if (inTelaLogin) {
    form.style = "display: none";
    formCriar.style = "display: flex";
    titulo.innerText = "Registrar";
    btnTrocarTela.innerText = "Acessar conta"
    inTelaLogin = false;
    return;
  }
  form.style = "display: flex";
  formCriar.style = "display: none";
  titulo.innerText = "Login";
  btnTrocarTela.innerText = "Criar conta"
  inTelaLogin = true;
}
