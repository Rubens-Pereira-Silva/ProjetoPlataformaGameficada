const itemsVenda = [
  "pirata",
  "ninja",
  "astronauta",
  "pirata",
  "ninja",
  "astronauta",
  "pirata",
  "ninja",
  "astronauta",
  "pirata",
  "ninja",
  "astronauta",
];

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

const loja = document.getElementById("loja");

itemsVenda.forEach((item) => {
  loja.innerHTML += `
        <div class="itemLoja">
            <img src="../images/iconsJogador/${item}.png" />
            <button onclick=comprarIcon("${item}")>Comprar</button>
        </div>
    `;
});
