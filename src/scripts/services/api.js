class Atividade {
  constructor(type, nome, icon, teoria) {
    this.type = type;
    this.nome = nome;
    this.icon = icon;
    this.teoria = teoria;
  }
}

let ListaTeoriaTeste = [
  "Aqui temos a primeira pagina da teoria",
  "aqui temos a segunda pagina da teoria",
  "aqui podemos ver a terceira pagina da teoria",
  "a quarta tambem esta aqui",
  "para finalizar a quinta tambem esta entre nos",
];

function pegarAtividades() {
  return [
    new Atividade("teoria", "Reciclagem", "livro.png", ListaTeoriaTeste),
    new Atividade("teoria", "Reciclagem", "livro.png", ListaTeoriaTeste),
    new Atividade("teoria", "Reciclagem", "livro.png", ListaTeoriaTeste),
    new Atividade("teoria", "Reciclagem", "livro.png", ListaTeoriaTeste),
    new Atividade("pratica", "Reciclagem", "haltere.png", ""),
  ];
}

function statusJogador() {
  return {
    nivel: 6,
  };
}
