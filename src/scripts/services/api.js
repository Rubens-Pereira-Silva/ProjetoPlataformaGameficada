const url = "https://projetoplataformaunip-api-1.onrender.com";

async function pegarAtividades() {
  const res = await fetch(url + "/atividade/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
}

async function statusJogador() {
  console.log(localStorage.getItem("ID"));
  const res = await fetch(url + "/usuario/" + localStorage.getItem("ID"), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

async function concluirAtividade(nivelAtividade) {
  const res = await fetch(
    url + `/usuario/level/${localStorage.getItem("ID")}/${nivelAtividade}`,
    {
      method: "PUT",
    }
  );
  const data = await res.json();
  return data;
}
