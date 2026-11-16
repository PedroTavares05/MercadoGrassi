const express = require("express");
const router = express.Router();

// Importar o Controller
const usuarioController = require("../controller/usuarioController");
router.get("/", usuarioController.redenrizarUser);

module.exports = router;
