/**
 * Gerencia um estoque de itens.
 * - Cria um array inicial com 4 itens.
 * - Atualiza o segundo item do array.
 * - Exibe o número total de itens.
 */
const gerenciarEstoque = () => {
    const estoque = ["Item 1", "Item 2", "Item 3", "Item 4"];
    estoque[1] = "Novo Item 2";
    console.log("Número total de itens no estoque:", estoque.length);
  };
  
  gerenciarEstoque();
  