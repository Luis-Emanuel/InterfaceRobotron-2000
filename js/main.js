// As estatisticas atuais do robo
const estatisticas = document.querySelectorAll('[data-estatistica]');

// Os controle de - e + componentes do robo
const controles = document.querySelectorAll("[data-controle]");

// Relação de pontos e estatitica adicionada a cada peça 
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

// percorendo a lista de controles 
controles.forEach((elemento) => {
  // evento de click nos controles para sabermos qual foi clicado
  elemento.addEventListener('click', (evento) => {
    // função manipulaDaDos que recebe o sinal da openação e apeça do robo
    // evento.target.dataset.controle -> o sinal da openação para saber se foi adicionado ou subtraido
    //evento.target.parentNode -> A partir do filho descobrimos o pai com o parentNode e podemos saber qual peça foi clicada que sera a div
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    //a função recebe o nome da peca que foi clicada
    atualizaEstatistica(evento.target.dataset.peca)
  })
})

function manipulaDados(operacao, pecaDoRobo){
  //sabemos qual das div foi clicada agora vamos pegar o input para alterar o valor
  const valorDaPeca = pecaDoRobo.querySelector("[data-contador]")
  if(operacao === '-'){
    valorDaPeca.value = parseInt(valorDaPeca.value) - 1
  }else{
    valorDaPeca.value = parseInt(valorDaPeca.value) + 1;
  }
}

function atualizaEstatistica(peca){
  // percorre as estatisticas 
  estatisticas.forEach( (elemento) => {
    //elemento.textContent -> valor da estatistica atual 
    //parseInt(elemento.textContent) -> passa para inteiro o valor da estatistica atual
    //pecas[peca] -> Pega a lista pecas e acessa a posição peca que foi passada para função e o [elemento.dataset.estatistica] acessa o valor especifico que será somado 
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}