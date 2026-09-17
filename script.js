const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você tem mais amigos da sua idade ou com uma faixa etária muito diferente da sua?",
    alternativas: ["a)sim", "b)não"],
  },
  {
    enunciado: "O etarismo (ou preconceito de idade) costuma criar barreiras sociais que dificultam a aproximação e a amizade entre pessoas de gerações diferentes?",
    alternativas: ["a)verdadeiro", "b)falso"],
  },


 {
    enunciado: "Amizades que cruzam barreiras de idade (intergeracionais) trazem benefícios mútuos, permitindo a troca de experiências e a quebra de preconceitos etários?",
    alternativas: ["a)verdadeiro", "b)falso"],
  },
  {
    enunciado: "Afirmar rigidamente que 'jovens só devem andar com jovens e velhos só com velhos' é uma ideia que reforça a segregação imposta pelo etarismo na sociedade?",
    alternativas: ["a)verdadeira", "b)falso"],
  },


   {
    enunciado: "O lema 'para as amizades, as idades não importam' desafia a lógica do etarismo ao valorizar a conexão humana e a afinidade pessoal acima de rótulos geracionais?",
    alternativas: ["a)verdadeiro", "b)falso"],
  },
  {
    enunciado: "O incentivo a atividades comunitárias que integram diferentes faixas etárias ajuda a reduzir a solidão e a construir uma sociedade menos egoísta?",
    alternativas: ["a)verdadeiro", "b)falso"],
  },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = &quot;&quot;;

function mostraPergunta() {
if (atual &gt;= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = &quot;&quot;;

mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement(&quot;button&quot;);
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener(&quot;click&quot;, () =&gt; respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + &quot; &quot;;
atual++;
mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = &quot;Em 2049...&quot;;
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = &quot;&quot;;
}

mostraPergunta();