let jogador = {
  nome: "Jogador Bom",
  moedas: 0,
  nivel: 2,
}
//Funções do jogador

function addMoedaTeoria(quantidade, nivelAtt){
  console.log(quantidade, nivelAtt, jogador.nivel)
  if(nivelAtt == jogador.nivel){
    console.log(jogador)
    jogador.moedas += quantidade
    attHeader()
  }
}

function addNivelJogador(nivelAtt){
  if(nivelAtt == jogador.nivel){
    jogador.nivel += 1
    console.log("Nivel "+ jogador.nivel)
    attHeader()
    }
  }
  






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
    new Atividade("teoria", "Reciclagem 2 ", "livro.png", ListaTeoriaTeste),
    new Atividade("teoria", "Reutilizar", "livro.png", ListaTeoriaTeste),
    new Atividade("teoria", "Baterias e Pilhas", "livro.png", ListaTeoriaTeste),
    new Atividade("pratica", "Reciclagem", "haltere.png", ""),
  ];
}

function statusJogador() {
  return {
    nivel: 6,
  };
}
