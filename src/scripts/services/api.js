let jogador = {
  nome: "Jogador Bom",
  moedas: 0,
  nivel: 10,
};
//Funções do jogador

let ListaTeoriaTeste = [
  "Definição: A reciclagem é um processo que tem como propósito o reaproveitamento de lixo sólido, geralmente vidro, metal, papeis e principalmente plástico, ele ficou bastante chamativo quando começamos a produzir muito lixo",
  "Para que o lixo possa ser reciclável, é necessário que ele seja primeiro separado, por isso você definitivamente já deve ter visto um grupo de lixeiras coloridas pela rua, a lixeira azul é para papel, a verde é para o vidro, vermelha para os plásticos e amarela aos metais.",
  "aqui podemos ver a terceira pagina da teoria",
  "a quarta tambem esta aqui",
  "para finalizar a quinta tambem esta entre nos",
];

let ListaTeoriaEconomiaCircular = [
  "Economia circular é um modelo de produção e consumo baseado em reutilizar, renovar e reparar os materiais",
  "Seu maior ponto forte é retardar o uso de recursos naturais,pois estarão em atividade por mais tempo",
  "permitindo automaticamente uma diminuição no descarte de lixo, consumo de energia e dependencia de materia prima",
  "A união europeia é uma das organizações a favor desse metodo, almejando atingir tal sustentabilidade atraves de ideias que irão incentivar as industrias produtoras mudar",
];

function addMoedaTeoria(quantidade, nivelAtt) {
  console.log(quantidade, nivelAtt, jogador.nivel);
  if (nivelAtt == jogador.nivel) {
    console.log(jogador);
    jogador.moedas += quantidade;
    attHeader(jogador);
  }
}

function addNivelJogador(nivelAtt) {
  if (nivelAtt == jogador.nivel) {
    jogador.nivel += 1;
    console.log("Nivel " + jogador.nivel);
    attHeader(jogador);
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
class Desafio {
  constructor(type, pergunta, respostas) {
    this.type = type;
    this.pergunta = pergunta;
    this.respostas = respostas;
  }
}

const url = "http://localhost:8080";

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
  const res = await fetch(url + "/usuario?id=" + localStorage.getItem("ID"), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
}
