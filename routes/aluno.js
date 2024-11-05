const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController.js');

// Rota para obter todos os usuários
router.get('/', alunoController.obterTodos);
// Rota para criar um novo usuário
//router.post('/', alunoController.criarUsuario);
router.get('/:ra', alunoController.obterPeloRa);    
router.get('/:ra/disciplinas', alunoController.obterPeloRaDisciplinas);    

module.exports = router;