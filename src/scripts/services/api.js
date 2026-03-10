class Atividade {
  constructor(type, nome, icon) {
    this.type = type;
    this.nome = nome;
    this.icon = icon;
  }
}

function pegarAtividades() {
  return [
    new Atividade("teoria", "Reciclagem", "livro.png"),
    new Atividade("teoria", "Reciclagem", "livro.png"),
    new Atividade("teoria", "Reciclagem", "livro.png"),
    new Atividade("teoria", "Reciclagem", "livro.png"),
    new Atividade("pratica", "Reciclagem", "haltere.png"),
  ];
}
