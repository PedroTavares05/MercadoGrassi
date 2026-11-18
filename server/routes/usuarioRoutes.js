const express = require("express");
const router = express.Router();

// Importar o Controller
const usuarioController = require("../controller/usuarioController");
// redenrizar cadastro de usuario
router.get("/", usuarioController.redenrizarUser);

// lançar usuario
router.get("/cadastrar", usuarioController.cadastrar);
router.post("/cadastrar", usuarioController.cadastrar);

// CHAMA A PAGINA DE LISTAR PRODUTOS
router.get("/listar", usuarioController.listarTodosUsuarios);

router.post("/excluir/:id", usuarioController.excluirUsuario);
module.exports = router;
