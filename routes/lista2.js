const express = require("express");
const router = express.Router();
const lista2Controller = require("../controllers/lista2Controller");

router.get("/alunos", lista2Controller.mostrarTodos);
router.get("/alunos/:ra", lista2Controller.AlunoRa);
router.get("/alunos/:ra/disciplinas", lista2Controller.listarDisciplinas);
router.post("/alunos/:ra/disciplinas", lista2Controller.adicionarDisciplina);
router.put("/alunos/:ra", lista2Controller.atualizarDadosAluno);

module.exports = router;
