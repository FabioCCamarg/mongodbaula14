const express = require("express");
const router = express.Router();
// const lista1Controller = require("../controllers/lista1Controller.js");

// Rota para obter todos os usuários
router.get('/exercicio1', lista1Controller.exercicio1);
router.get('/exercicio2', lista1Controller.exercicio2);
router.get('/exercicio3', lista1Controller.exercicio3);
router.get('/exercicio4', lista1Controller.exercicio4);
router.get('/exercicio5', lista1Controller.exercicio5);
router.get('/exercicio6', lista1Controller.exercicio6);

module.exports = router;