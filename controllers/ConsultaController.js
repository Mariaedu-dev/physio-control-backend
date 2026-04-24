const Consulta = require('../models/Consulta');

exports.criarConsulta = async (req, res) => {
  try {
    const novaConsulta = new Consulta(req.body);
    await novaConsulta.save();
    res.status(201).json(novaConsulta);
  } catch (error) {
    res.status(400).json({ message: "Erro ao salvar", error });
  }
};

exports.listarConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.find().sort({ dataSessao: -1 });
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar", error });
  }
};

exports.atualizarConsulta = async (req, res) => {
  try {
    const atualizada = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizada);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar", error });
  }
};

exports.deletarConsulta = async (req, res) => {
  try {
    await Consulta.findByIdAndDelete(req.params.id);
    res.json({ message: "Registro removido com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar", error });
  }
};