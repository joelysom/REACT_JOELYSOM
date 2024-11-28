/**
 * Exibe palavras de um array em ordem reversa.
 * 
 * @param {string[]} palavras - Array de palavras a ser exibido.
 */
const exibirPalavrasReverso = (palavras) => {
    for (let i = palavras.length - 1; i >= 0; i--) {
      console.log(palavras[i]);
    }
  };
  
  exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
  