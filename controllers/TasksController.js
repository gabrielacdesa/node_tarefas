const Task = require('../models/Task');

exports.obterTarefas = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks)
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
      }
}

exports.adicionarTarefa = async (req, res) => {
    const newTask = req.body;
    try {
        await Task.create(newTask);
        res.json({ message: 'Tarefa adicionada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar tarefa' });
  }
  }

exports.atualizarTarefa = async (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    try {
        await Task.findByIdAndUpdate(taskId, updatedTask);
        res.json({ message: 'Tarefa atualizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
}

exports.excluirTarefa = async (req, res) => {
    const taskId = req.params.id;
    try {
        await Task.findByIdAndDelete(taskId);
        res.json({ message: 'Tarefa excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
}
