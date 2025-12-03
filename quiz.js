// LISTA DE PERGUNTAS
const quiz = [
    {
        pergunta: "Qual é a capital da ANA?",
        opcoes: ["Gus", "Manu", "Sim", "Dorama BL"],
        correta: 0
    },
    {
        pergunta: "Quando a ANA aprendeu a Voar?",
        opcoes: ["ontem as 00:99", "ontem de amanhã", "11 de setembro", "1800 A.C"],
        correta: 2
    },
    {
        pergunta: "Quanto é 2 + ANA?",
        opcoes: ["Sim", "six", "seven", "Bolsonaro"],
        correta: 2
    }
];

let index = 0;
let pontos = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

// Função que carrega cada pergunta
function carregarPergunta() {
    const q = quiz[index];
    questionElement.textContent = q.pergunta;

    optionsElement.innerHTML = "";
    optionsElement.classList.add("fade");

    q.opcoes.forEach((texto, i) => {
        const button = document.createElement("button");
        button.textContent = texto;
        
        button.onclick = () => verificarResposta(button, i);
        optionsElement.appendChild(button);
    });
}

// Verifica resposta
function verificarResposta(botaoClicado, i) {
    const correctIndex = quiz[index].correta;
    const botoes = document.querySelectorAll("#options button");

    // desabilita botões para evitar múltiplos cliques
    botoes.forEach(btn => btn.disabled = true);

    // marca certo
    if (i === correctIndex) {
        pontos++;
        botaoClicado.classList.add("correct");
    } 
    // marca errado
    else {
        botaoClicado.classList.add("wrong");
        botoes[correctIndex].classList.add("correct");
    }

    // vai para próxima pergunta depois de 1 segundo
    setTimeout(() => {
        index++;

        if (index < quiz.length) {
            carregarPergunta();
        } else {
            final();
        }
    }, 1000);
}

// Tela final do quiz
function final() {
    questionElement.textContent = "Quiz Finalizado!";
    optionsElement.innerHTML = `<h3>Você infelizmente acertou ${pontos} de ${quiz.length}</h3>`;
}

// Inicializa
carregarPergunta();
