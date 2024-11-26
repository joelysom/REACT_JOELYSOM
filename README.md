
---

## README.md (Aula 10)

### Título: Alterações no Projeto do Restaurante (Aula 10)

### Breve descrição das alterações feitas na aula:
- **Adição de estilos personalizados** para melhorar a interface do site, utilizando arquivos CSS para estilização.
- Atualização do **arquivo `MenuComponent.js`** para incluir um novo layout mais elegante, com classes estilizadas e responsividade.
- Criação de novos componentes como o **`DishDetailComponent.js`** para separar a lógica de exibição dos pratos selecionados.
- Modificação do **arquivo `App.js`** para integrar as alterações no layout e simplificar a lógica do projeto.
- Atualização do **arquivo `dishes.js`** para incluir novos pratos (Poção da Paciência, Poção do Amor, Poção da Morte), com descrições e imagens relevantes.

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
   - O componente principal (`Menu`) é responsável por renderizar o menu de pratos e chamar o método para exibir os detalhes do prato selecionado.

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
   - Os pratos são representados como objetos dentro de um array (`DISHES`), com propriedades de diferentes tipos como `string` (nome, descrição, imagem) e `number` (preço).

---

### App.js

**Descrição:**
Este arquivo é o ponto de entrada do projeto e conecta os componentes principais, como o menu e os dados dos pratos.

**Perguntas:**

1. **Para que serve o `const [dishes]`?**
   - Serve para armazenar a lista de pratos (importada de `dishes.js`) como estado local do componente.

2. **Explicar como funciona o `<Menu dishes={dishes} />`:**
   - Este componente é chamado dentro do `App.js` e recebe a lista de pratos como uma propriedade (`props.dishes`), que é utilizada no `MenuComponent.js` para renderizar os pratos no menu.

---