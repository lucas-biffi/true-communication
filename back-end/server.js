const express = require('express');
const cors = require('cors');
const relatosRoutes = require('./routes/relatos');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/relatos', relatosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
