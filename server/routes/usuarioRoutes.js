const express = require("express");
const router = express.Router();

// Importar o Controller
const usuarioController = require("../controller/usuarioController");
// redenrizar cadastro de usuario
router.get("/", usuarioController.redenrizarUser);

// lançar usuario
router.post("/cadastrar", )

module.exports = router;
