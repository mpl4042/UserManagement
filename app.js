const express = require('express');
const app = express();

const userController = require('./controllers/userController');

app.use(express.json());

// rota para cadastro de usuário
app.post('/usuarios', userController.creatUser);

app.listen(3000, () => {
  console.log('Aplicação rodando em http://localhost:3000');
});
