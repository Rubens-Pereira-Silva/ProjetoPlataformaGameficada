// EU NÃO SEI USAR JS REVISE ISSO PRFV

const url = "https://projetoplataformaunip-api-1.onrender.com";

const formVoluntario = document.getElementById("form-voluntario");

formVoluntario.addEventListener("submit", async function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  try {
    const res = await fetch(url + "/voluntario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone, mensagem })
    });

    document.getElementById("form-voluntario").style.display = "none";
    document.getElementById("confirmacao").style.display = "block";

  } catch (erro) {
    alert("Erro ao enviar. Tente novamente.");
  }
});