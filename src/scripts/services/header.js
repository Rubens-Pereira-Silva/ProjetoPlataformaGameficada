const header = document.querySelector("header");

function attHeader(jogadorRef) {
  header.innerHTML = `
    <h3>Moedas:${jogadorRef.moedas}</h3>
`;
}

attHeader();
