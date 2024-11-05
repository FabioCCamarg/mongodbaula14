const alunoModel = require("../models/aluno");

// GET http://localhost:3000/aluno
exports.obterTodos = async (req, res) => {
  try {
    const alunos = await alunoModel.find();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// GET http://localhost:3000/aluno/1
exports.obterPeloRa = async (req, res) => {
  try {
    const alunoRA = await alunoModel.findOne({ ra: req.params.ra });
    res.status(200).json(alunoRA);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
//GET http://localhost:3000/aluno/1/disciplinas
exports.obterPeloRaDisciplinas = async (req, res) => {
  try {
    const alunoRA = await alunoModel.findOne({ ra: req.params.ra });

    res.status(200).json(alunoRA.disciplinas);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
