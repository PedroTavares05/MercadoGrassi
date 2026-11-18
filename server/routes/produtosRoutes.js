// Criar o roteador
const express = require("express");
const router = express.Router();

// Importa o controller
const produtosController = require("../controller/produtosController");
// Rota Para redenrizar o cadastro
router.get("/", produtosController.renderizarCadastro);

// Rota lançar produtos
router.post("/cadastrar", produtosController.cadastrar);
module.exports = router;

// chama a pagina de listar produtos
router.get("/listar", produtosController.listarTodosProdutos);

//exclui produto
router.post("/excluir/:id", produtosController.excluirProduto);
