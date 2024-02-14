const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilização de páginas web.",
        "Uma linguagem de programação para criação de conteúdo estático.",
        "Uma linguagem de programação para desenvolvimento de aplicações web interativas."
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",
        "Comparação solta de valor e tipo",
        "Atribuição de valor"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um elemento HTML",
        "Um tipo de variável",
        "Um bloco de código reutilizável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array e retorná-lo?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "alert()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma condição 'if' em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Uma estrutura de controle de fluxo",
        "Uma função de callback"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador usado para concatenação de strings em JavaScript?",
      respostas: [
        "&",
        "+",
        "concat()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função 'addEventListener' em JavaScript?",
      respostas: [
        "Adiciona um ouvinte de evento a um elemento HTML",
        "Adiciona um novo elemento ao documento",
        "Define um intervalo para execução de uma função"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para ordenar os elementos de um array?",
      respostas: [
        "sort()",
        "order()",
        "organize()"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let respostas of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(respostas)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }