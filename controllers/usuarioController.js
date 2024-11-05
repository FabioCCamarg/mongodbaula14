const usuarioModel = require("../models/usuario");

//POST  http://localhost:3000/usuario
exports.criarUsuario = async (req, res) => {
  try {
    await usuarioModel.create(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

//GET http://localhost:3000/usuario
exports.obterTodos = async (req, res) => {
  try {
    const usuarios = await usuarioModel.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
