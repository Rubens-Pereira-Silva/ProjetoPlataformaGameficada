async function comprarIcon(nomeIcon) {
  const res = await fetch(
    "https://projetoplataformaunip-api-1.onrender.com/usuario/loja/icon/" +
      localStorage.getItem("ID"),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: nomeIcon.toString(),
    }
  );

  const data = await res.json();
  console.log(data);
}
