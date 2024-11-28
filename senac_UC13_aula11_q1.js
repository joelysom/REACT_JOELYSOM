/**
 * Gerencia uma lista de tarefas.
 * - Adiciona 3 tarefas ao array.
 * - Remove a última tarefa.
 * - Exibe o array final no console.
 */
const gerenciarTarefas = () => {
    const tarefas = [];
    tarefas.push("Tarefa 1", "Tarefa 2", "Tarefa 3");
    tarefas.pop();
    console.log("Array final de tarefas:", tarefas);
  };
  
  gerenciarTarefas();
  