const url = "http://localhost:8080";

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
  }
  return data;
}

const form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginEmailInput = document.getElementById("login-email-input").value;
  const loginSenhaInput = document.getElementById("login-senha-input").value;

  login(loginEmailInput, loginSenhaInput);
});
