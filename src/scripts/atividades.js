const sectionAtividades = document.getElementById("atividades");
let atividades = pegarAtividades();

for (let i = 0; i < atividades.length; i++) {
  const atividade = atividades[i];

  sectionAtividades.innerHTML += `
    <div class="atividade">
        <div class="circuloAtividade ${atividade.type}">
          <img src="/src/images/${atividade.icon}" alt="" />
        </div>
        <p>${atividade.nome}</p>
      </div>
  `;
}
