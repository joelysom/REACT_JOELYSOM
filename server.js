const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const sqlite3 = require('sqlite3').verbose();

// Criar e abrir o banco de dados SQLite
const db = new sqlite3.Database('./chat.db', (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados', err.message);
  } else {
    console.log('Banco de dados conectado');
  }
});

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Quando um cliente se conecta
io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  // Enviar mensagens já salvas do banco de dados quando o cliente se conecta
  db.all('SELECT * FROM messages ORDER BY id ASC', [], (err, rows) => {
    if (err) {
      throw err;
    }
    socket.emit('load-messages', rows);  // Envia as mensagens para o cliente
  });

  // Escutando a mensagem enviada por um cliente
  socket.on('send-message', (message) => {
    // Inserir a nova mensagem no banco de dados
    db.run('INSERT INTO messages (name, message) VALUES (?, ?)', [message.name, message.message], function (err) {
      if (err) {
        return console.log(err.message);
      }
      // Enviar a mensagem de volta para todos os clientes conectados
      io.emit('receive-message', { id: this.lastID, ...message });
    });
  });

  // Desconectar
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Configurar o servidor para rodar na porta 3001
server.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
