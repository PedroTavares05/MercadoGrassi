const usuarioModel = require("../models/usuarioModels.js");
const { cadastrar } = require("./usuarioController.js");

module.exports = {
  // Acessar usuario
  redenrizarUser: (req, res) => {
    res.render("usuarios/cadastrauser");
  },

  cadastrar: async (req, res) => {
    try {
      const { nome, email, senha, perfil, esta_ativo } = req.body;
      const publico_bool = esta_ativo === "1" || esta_ativo === "true";

      await usuarioModel.criarUsuario(nome, email, senha, perfil, publico_bool);
      res.redirect("/");
    } catch (erro) {
      console.log(`o erro foi ${erro}`);
      res
        .status(500)
        .send("Erro ao tentar cadastrar o usuário. Verifique o terminal.");
    }
  },
};
