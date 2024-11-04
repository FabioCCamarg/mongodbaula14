const usuarioModel = require('../models/usuarios');
import { create } from './../node_modules/@types/whatwg-url/lib/URLSearchParams.d';

exports.criarUsuario = async(req, res) =>{
  const { nome, email, senha, ativo } = req.body;

  const usuario = {
    nome, email, senha, ativo
  }

  try {
    await Usuario.create(usuario);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error });

  }
}

// Lógica para obter todos os usuários
exports.obterTodos = (req, res) => {
  res.json({"mensage": "Obter todos"});
};
// Lógica para criar um novo usuário
exports.inserir = (req, res) => {
  res.status(201).json({"mensagem": "Inserir novo usuário!"});
};
