// Criar o roteador
const express = require("express");
const router = express.Router();

// Importa o controller
const produtosController = require("../controller/produtosController");
// Rota Para redenrizar o cadastro
router.get("/", produtosController.renderizarCadastro);

// Rota lançar produtos
router.get("/criar", produtosController.cadastrar);
module.exports = router;
