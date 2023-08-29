const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const tasksController = require('./controllers/TasksController');

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/mytasksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//Listar as tarefas
app.get('/tasks', tasksController.obterTarefas);

//Adicionar tarefa
app.post('/tasks', tasksController.adicionarTarefa);

//Atualizar tarefa
app.put('/tasks/:id', tasksController.atualizarTarefa);

//Excluir tarefa
app.delete('/tasks/:id', tasksController.excluirTarefa);



