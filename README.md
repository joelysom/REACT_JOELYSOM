
---

## README.md (Aula 10)
***ALUNO: JOELYSOM ALCANTARA DA SILVA***

***TURMA: 109 - AULA 10***

---

### Título: Alterações no Projeto do Restaurante (Aula 10)

### Breve descrição das alterações feitas na aula:
- **Adição de estilos personalizados** para melhorar a interface do site, utilizando arquivos CSS para estilização.
- Atualização do **arquivo `MenuComponent.js`** para incluir um novo layout mais elegante, com classes estilizadas e responsividade.
- Criação de novos componentes como o **`DishDetailComponent.js`** para separar a lógica de exibição dos pratos selecionados.
- Modificação do **arquivo `App.js`** para integrar as alterações no layout e simplificar a lógica do projeto.
- Atualização do **arquivo `dishes.js`** para incluir novos pratos (Poção da Paciência, Poção do Amor, Poção da Morte), com descrições e imagens relevantes.
- Adicionado mais protudos, poções legais e divertidas.
![POTION](bullLOVE.png)
- Adicionei(PELO MENOS TENTEI) fazer um `css/App.css` para deixar mais bonitinho
```javascript
/* Estilo Geral */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #333;
  }
  
  .container {
    margin-top: 20px;
  }
  
  /* Navbar, cor de fundo*/
  .navbar {
    background-color: #007bff !important;
  }
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  /* Cards - tentei animar eles tipo crescer ao passar o mouse*/
  .card {
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-title {
    font-size: 1.2rem;
    color: #007bff;
  }
  
  .card-text {
    font-size: 0.9rem;
    color: #555;
  }
  
  .card-img-overlay {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
  }
```

---

### MenuComponent.js

**Descrição:**
Este arquivo é responsável por exibir a lista de pratos no menu e permitir que o usuário selecione um prato para visualizar seus detalhes.

**Perguntas:**

1. **Quais os imports utilizados?**
   - `React`: Para criar componentes funcionais.
   - `useState`: Para controlar o estado do prato selecionado.
   - `reactstrap`: Para utilizar os componentes `Card`, `CardImg`, `CardImgOverlay`, `CardText`, `CardBody` e `CardTitle` e construir o layout.

2. **Há componentes? O que fazem?**
   - Sim, há componentes como `Card` e `CardImg` que exibem visualmente os pratos.
   - O componente principal (`Menu`) é responsável por desenhar o menu de pratos e chamar o método para exibir os detalhes do prato selecionado.

3. **Para que serve o `onDishSelect` no projeto?**
   - Serve para definir o prato selecionado no estado do componente, permitindo que seus detalhes sejam exibidos.

4. **Para que serve o `renderDish`?**
   - Renderiza os detalhes do prato selecionado. Caso nenhum prato esteja selecionado, retorna uma `<div>` vazia.

5. **Para que serve o `props.dishes.map`?**
   - É utilizado para iterar sobre a lista de pratos (`dishes`) e gerar dinamicamente os cartões (`Card`) para cada prato no menu.

---

### dishes.js

**Descrição:**
Este arquivo contém os dados dos pratos que serão exibidos no menu, incluindo nome, imagem, descrição e preço.

**Perguntas:**

1. **Quais as propriedades?**
   - `id`: Identificação única do prato.
   - `name`: Nome do prato.
   - `image`: Caminho da imagem do prato.
   - `description`: Descrição do prato.
   - `price`: Preço do prato.

2. **Que tipo de dado é utilizado?**
   - Os pratos são mostrados como objetos dentro de um array (`DISHES`), com propriedades de diferentes tipos como `string` (nome, descrição, imagem) e `number` (preço).

---

### App.js

**Descrição:**
Este arquivo é o ponto de entrada do projeto e conecta os componentes principais, como o menu e os dados dos pratos.

**Perguntas:**

1. **Para que serve o `const [dishes]`?**
   - Serve para armazenar a lista de pratos (importada de `dishes.js`) como estado local do componente.

2. **Explicar como funciona o `<Menu dishes={dishes} />`:**
   - Ess componente que é chamado dentro do `App.js` e recebe a lista de pratos como uma props (`props.dishes`), que é utilizada no `MenuComponent.js` para desenhar os pratos no menu.

---

## ***NOTINHAS***👻
- Foi simples adicionar novos produtos copiando e colando os anteriores, usando o google tradutor para traduzir as partes que não entendi.
- Tentei deixar o nome na frente e tela mais escura para facilitar ao usuário, indentificar o produto/prato que aparece.
- Acho legal destacar que é fácil alterar e deixar mais bonito.. principalmente adicionando ao `App.css` alguns detalhes que expliquei acima.
---

## **"Você tem que aprender a deixar o que você quer acontecer, acontecer."** - Glinda (WICKED - O Magico de Oz)