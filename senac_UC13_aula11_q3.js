/**
 * Calcula a média das notas de alunos.
 * - Cria um array aninhado com as notas dos alunos.
 * - Usa loops para calcular a média de cada aluno.
 */
const calcularMediaAlunos = () => {
    const alunos = [
      [8, 7, 9],
      [10, 9, 10],
      [6, 5, 8]
    ];
  
    alunos.forEach((notas, index) => {
      const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
      console.log(`Aluno ${index + 1}: Média = ${media.toFixed(2)}`);
    });
  };
  
  calcularMediaAlunos();
  