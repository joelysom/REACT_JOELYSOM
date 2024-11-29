# Documentação do Projeto React - Detalhamento de Pratos e Comentários

## ALUNOS: Joelysom Alcantara & José lucas Luiz
## TURMA: 109
## CURSO: T.I

Ess documento mostra os passos realizados no projeto React, onde criamos um site q exibe detalhes de pratos, incluindo ingredientes, receitas e comentários bonitinhos. Adicionamos funcionalidades, estilos e dados para melhorar a experiência do comprador.

---

## **Passo a Passo da Implementação**

### **1. Configuração Inicial**
1. Criamos um projeto React usando o comando `npx create-react-app`.
2. Instalamos o Reactstrap e Bootstrap para estilização:
   ```bash
   npm install reactstrap bootstrap
   ```
3. Importamos o Bootstrap no arquivo `index.js`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

---

### **2. Estrutura de Dados dos Pratos**
- O arquivo `dishes.js` ciramos para armazenar os dados dos pratos.
- Cada prato tem os seguintes detalhes:
  - **id**: Identificador.
  - **name**: Nome do prato.
  - **image**: Caminho para a imagem.
  - **category**: Categoria do prato.
  - **label**: Rótulo (ex: Apimentado, Novo).
  - **price**: Preço.
  - **description**: Descrição.
  - **ingredients**: Lista de ingredientes.
  - **recipe**: Instruções de preparo.
  - **comments**: Lista de comentários com autor, data, classificação e conteúdo.

Exemplo de entrada no `dishes.js`:
```javascript
{
  id: 0,
  name: 'Uthappizza',
  image: 'assets/images/uthappizza.png',
  category: 'principais',
  label: 'Apimentado',
  price: '4.99',
  description: 'Uma combinação única de Uthappam indiano (panqueca) e pizza italiana.',
  ingredients: [
    'Uthappam',
    'Tomates cereja',
    'Cebola Vidalia',
    'Pimentas Guntur',
    'Paneer de búfalo'
  ],
  recipe: 'Prepare o Uthappam, adicione os ingredientes e asse até dourar.',
  comments: [
    { id: 0, rating: 5, comment: "Imagine todos os alimentos vivendo na confusão!", author: "John Lemon", date: "2012-10-16T17:57:28.556094Z" }
  ]
}
```

---

### **3. Componentes no React**

#### **3.1. MenuComponent**
- Usamos para exibir os pratos em forma de cartões que saltam.
- Ao clicar em um prato, o componente exibe os detalhes completos no `DishDetail`.
- Implementado em `MenuComponent.js`.

#### **3.2. DishdetailComponent**
- Exibe detalhes do prato selecionado, incluindo ingredientes, receita e comentários.
- Implementado em `DishdetailComponent.js` com as seguintes funções:
  - **renderDish**: Detalha os detalhes do prato.
  - **renderComments**: Mostra os comentários associados ao prato.

#### **3.3. Estilização no CSS**
- Melhor estilo para tornar a pagina mais atrativa.
- Adicionamos hover, espaçamento, bordas arredondadas e sombras nos comentários.

Exemplo de estilização em `App.css`:
```css
.comment-container {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.comment-container:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
```

---

### **4. Adição de Comentários Aleatórios**
- Atualizamos o arquivo `dishes.js` para incluir entre 2 a 5 comentários por prato.
- Cada comentário inclui autor, data, rating e conteúdo.

Exemplo:
```javascript
comments: [
  { id: 0, rating: 5, comment: "Adorei a combinação de sabores.", author: "Chris P. Bacon", date: "2021-11-01T12:57:28.556094Z" },
  { id: 1, rating: 4, comment: "Bem diferente e gostoso!", author: "Dough Nut", date: "2023-03-23T14:18:28.556094Z" }
]
```

---

## **Dicas**
1. **Reutilize Componentes:** Componentize elementos reutilizáveis como botões e cards para simplificar o código.
2. **Aprimore Estilos:** Pequenos detalhes como sombras e espaçamentos melhoram muito a experiência do usuário.
3. **Atenção ao JSON:** Certifique-se de que os dados dos pratos estejam no formato correto para evitar erros no React.
4. **Teste Constantemente:** Utilize o navegador para verificar se as funcionalidades estão funcionando conforme esperado após cada alteração.

---

## **Reflexão Final**
> ## "A simplicidade é o último grau de sofisticação."
> ## \- **Leonardo da Vinci**

No desenvolvimento dos detalhes, a simplicidade significa criar sistemas intuitivos, com códigos limpos e funcionais. Este projeto exemplifica como organizar dados e criar componentes reutilizáveis, garantindo, assim, uma experiência elegante e eficiente.

