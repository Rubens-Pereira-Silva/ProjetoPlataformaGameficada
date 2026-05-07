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
    "astronauta"
]

const loja = document.getElementById("loja")

itemsVenda.forEach(item => {
    loja.innerHTML += `
        <div class="itemLoja">
            <img src="../images/iconsJogador/${item}.png" />

            <button>Comprar</button>
        </div>
    `
})