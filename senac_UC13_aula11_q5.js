/**
 * Jogo de adivinhação de números.
 * - O usuário tenta adivinhar um número entre 1 e 10.
 * - Digitar "sair" encerra o jogo.
 */
const jogoAdivinhacao = () => {
    const numeroCorreto = Math.floor(Math.random() * 10) + 1;
  
    while (true) {
      const tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para encerrar:");
      if (tentativa.toLowerCase() === "sair") {
        console.log("Jogo encerrado. Obrigado por jogar!");
        break;
      }
  
      if (parseInt(tentativa) === numeroCorreto) {
        console.log("Parabéns! Você acertou!");
        break;
      } else {
        console.log("Tente novamente.");
      }
    }
  };
  
  jogoAdivinhacao();
  