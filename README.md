# Exercícios - Aula 11 - UC13

Esse repositorio `branch main`, tem os exercícios propostos na aula 11. Cada questão foi resolvida em um arquivo `.js` separado e comentada usando o metodo JSDoc.

## Estrutura de Arquivos

- `senac_UC13_aula11_q1.js`: Gerenciamento de lista de tarefas.
- `senac_UC13_aula11_q2.js`: Gerenciamento de estoque.
- `senac_UC13_aula11_q3.js`: Cálculo da média das notas de alunos.
- `senac_UC13_aula11_q4.js`: Exibição de palavras em ordem reversa.
- `senac_UC13_aula11_q5.js`: Jogo de adivinhação.

## Dicas seguidas

1. Clonar esse repositório.
2. Abra os arquivos no editor de sua preferência.
3. Execute cada script individualmente para testar as funcionalidades.

## Documentação

Todas as funções foram documentadas usando o JSDoc(como referência da aula passada), detalhei o que cada função faz e oque utilizei.

---

**Link para o repositório GitHub:** [Joelysom-React](https://github.com/joelysom/REACT_JOELYSOM.git)

---

## Notas importantes
### Curiosidades e Sugestões sobre os Códigos Elaborados

#### **Questão 1: Gerenciamento de Tarefas**

- **Curiosidade**: O método `.push()` adiciona novos elementos ao final do array, evitando a necessidade de redistribuir todos os outros indices. Da mesma forma, o `.pop()` remove o último elemento, o que também mantém a performance boa.

- **Sugestão**: adicionar ou remover os elementos em outras posições do array faz uso do `.splice()` ou do `.shift()`.

---

#### **Questão 2: Gerenciamento de Estoque**

- **Curiosidade**: O método `.length` pode de retornar o tamanho atual do array e também pode ser usado para truncá-lo. Ao definir `estoque.length = 2`, o array vai ter apenas dois elementos.

- **Sugestão**: adicionar ou remover itens em posições específicas, tem o `.splice()`, o qual é mais versátil para trabalhar nas manipulações mais complexas.

---

#### **Questão 3: Cálculo da Média das Notas**

- **Curiosidade**: O método `.reduce()` é um dos mais comuns e fortes nos os métodos de array, porque faz acumular e processar valores de forma densa, e pode ainda realizar operações dificeis, como somar ou concatenar strings.

- **Sugestão**: Sempre verificar se o array de notas não está vazio antes do cálculo da média para evitar tentativas de divisão por zero.

---

#### **Questão 4: Apresentação de Palavras em Ordem Reversa**

- **Curiosidade**: Interar sobre os arrays em ordem inversa é interessante para casos onde trabalhamos com os dados em pilha (stack), onde o último a entrar é o primeiro a sair "LIFO".

- **Sugestão**: Caso precisarmos inverter a ordem de todos os elementos da array, usar o método `.reverse()`, mas ele muda o array original. Usar `array.slice(). reverse()` para preservar o original. 

### Questão 5: Jogo de Adivinhação

- **Curiosidade**: A função `Math.random()` é responsável por gerar números pseudoaleatórios variando de 0 até 1. Quando multiplicamos e arredondamos, podemos obter números inteiros para uma pausa específica, como o jogo de adivinhação.

- **Dica**: Para deixar o jogo mais interessante, tipo pode criar um contador de tentativas ou dar algumas dicas, como "o número é maior" ou "o número é menor".

---

### Outras Dicas Gerais

1. **Usar funções de seta quando possível**: São mais concisas e funcionam muito bem em "callbacks" ou funções pequenas.(eu to viciado nelas `=>`)

2. **Comentando bem o código**: a paciência nessa questão da documentação com JSDoc(eu consigo entender o codigo más explicar as vezes fica dificil), JSDOC ajuda na leitura, e isso permite a extração da documentação por ferramentas. 

3. **Teste cada função separadamente**: Testando em ambientes separados, dá para garantir o funcionamento correto da funcionalidade.

4. **Otimizar minha lógica**: Sempre que puder, procurar maneiras de simplificar loops ou evitar cálculos desnecessários. 

---

## NOTINHA 💋

## **"A sabedoria começa na reflexão."** — Sócrates
- Cada linha de código que escrevemos é uma oportunidade para **refletir** sobre sua eficiência, clareza e propósito.

- Tipo ao Revisar, Sempre analisamos se há formas mais simples ou melhores de resolver um problema, como substituir loops complexos por métodos de array como .map() ou .reduce().

- também comprrender em vez de apenas copiar soluções, refletir sobre como e por que determinado código funciona leva a dominar isso com o tempo.

- Ajustando e melhorando, fazendo assim como a sabedoria vem da autocrítica, o código melhora com refatoraçõe e ajustes ao decorrer do tmepo.

---
aprofundei demais, enfim meu readme!!

- ALUNO: JOELYSOM
- TURMA: 109
- CURSO: T.I

---

- ***OBS:*** usei `1..5 | ForEach-Object { New-Item -ItemType File -Name "senac_UC13_aula11_q$_.js" }
`

- no TERMINAL para criar os arquivos js todos de uma vez para depois preenche-los, acho legal esses detalhes do windows.