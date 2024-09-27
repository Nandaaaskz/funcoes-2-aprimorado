const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")


const perguntas = [
    {
        enunciado: "Qual o maior macaco de todos?",
        alternativas: [
            {
                texto: "a. Babuíno",
                afirmacao: "Pergunta 1 errada - marcaco: Babuíno. ",
            },
            {
                texto: "b. Orangotango",
                afirmacao: "Pergunta 1 errada - marcado: Orangotango. ",
            },
            {
                texto: "c. Gorila",
                afirmacao: "Pergunta 1 correta, parabéns. ",
            },
            {
                texto: "d. Bugio",
                afirmacao: "Pergunta 1 errada - marcado: Bugio. ",
            }
        ]
    },
    {
        enunciado: "Qual o nome do personagem da Disney que foi criado por gorilas desde a sua infância?",
        alternativas: [
            {
                texto: "a. Mogli",
                afirmacao: "Pergunta 2 errada - marcado: Mogli. ",
            },
            {
                texto: "b. Rodney",
                afirmacao: "Pergunta 2 errada - marcado: Rodney. ",
            },
            {
                texto: "c. Dumbo",
                afirmacao: "Pergunta 2 errada - marcado: Dumbo (?????). ",
            },
            {
                texto: "d. Tarzan",
                afirmacao: "Pergunta 2 correta, é o Tarzan louco mesmo ;). ",
            }
        ]
    },
    {
        enunciado: "Chipanzés são carnívoros ou vegetarianos?",
        alternativas: [
            {
                texto: "a. Só comem frutas",
                afirmacao: "Chipanzés comem de tudo. ",
            },
            {
                texto: "b. Só comem carne",
                afirmacao: "Chipanzés comem de tudo. ",
            },
            {
                texto: "c. Comem de tudo",
                afirmacao: "Chipanzés comem de tudo mesmo, pergunta 3 correta. ",
            },
            {
                texto: "d. قرد",
                afirmacao: "لماذا أجبت على السؤال باللغة العربية أيها المهرج؟ ",
            }
        ]
    },
    {
        enunciado: "Qual é a espécie dos chimpanés?",
        alternativas: [
            {
                texto: "a. Pitangus sulphuratus",
                afirmacao: "Pitangus sulphuratus é a espécie do bem-te-vi, errou haha lol. ",
            },
            {
                texto: "b. Pan troglodytes",
                afirmacao: "Acertou a pergunta da espécie dos manos monkeys. ",
            },
            {
                texto: "c. Vampyroteuthis infernalis",
                afirmacao: "Engraçadinho, Vampyroteuthis infernalis é a espécie da lula-vampira-do-inferno. ",
            },
            {
                texto: "d. Aedes aegypti",
                afirmacao: "???????????????? (nada será comentado sobre a pergunta da espécie). ",
            }
        ]
    },
    {
        enunciado: "Qual o menor macaco?",
        alternativas: [
            {
                texto: "a. Sagui-pigmeu",
                afirmacao: "O menor macaco é o Sagui-pigmeu, resposta correta. ",
            },
            {
                texto: "b. Lêmure",
                afirmacao: "Menor macaco - Sagui-pigmeu (resposta errada). ",
            },
            {
                texto: "c. Macaco-prego",
                afirmacao: "Menor macaco - Sagui-pigmeu (resposta errada). ",
            },
            {
                texto: "d. Mico-leão-dourado",
                afirmacao: "Menor macaco - Sagui-pigmeu (resposta errada). ",
            }
        ]
    },
    {
        enunciado: "Só existem cerca de 3000 micos-leões-dourados na natureza devido a extinção :(",
        alternativas: [
            {
                texto: "a. Isso é triste :(",
                afirmacao: "Você acertou a última pergunta (obrigatório).",
            },
            {
                texto: "b. Isso é paia :(",
                afirmacao: "Você acertou a última pergunta (obrigatório).",
            },
            {
                texto: "c. fodasekkk",
                afirmacao: "conseguiu errar a única pergunta inerrável (vergonha).",
            },
            {
                texto: "d. Isso é complicado :(",
                afirmacao: "Você acertou a última pergunta (obrigatório).",
            }
        ]
    },
];

let atual = 0; 
let perguntaAtual; 
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Congratulations, você terminou o show do macaco.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();






