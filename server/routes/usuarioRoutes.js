const express = require("express");
const router = express.Router();

// Importar o Controller
const usuarioController = require("../controller/usuarioController");
// redenrizar cadastro de usuario
router.get("/", usuarioController.redenrizarUser);

// lançar usuario
router.get("/cadastrar", usuarioController.cadastrar);
router.post("/cadastrar", usuarioController.cadastrar);

module.exports = router;
