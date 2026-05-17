const mysql = require('mysql2/promise');

const connection = mysql.createPool({ 
  host: 'localhost',
  user: 'root',
  password: '', //Adicione a senha do seu MySQL Workbench
  database: 'true_communication' //Nome do banco de dados
});

console.log('Pool de conexões MySQL configurado!');

module.exports = connection;
