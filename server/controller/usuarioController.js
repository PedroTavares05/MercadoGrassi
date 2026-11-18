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
    }
  },
  listarTodosUsuarios: async (req, res) => {
    try {
      const usuario = await usuarioModel.listarUsuarios();

      // Caminho exato: pasta 'usuarios' / arquivo 'listaruser'
      res.render("usuarios/listaruser", { usuario });
    } catch (erro) {
      console.log(
        `o erro foi vc amar dms ${erro} e tbm esse ai de listar os usuarios`,
      );
    }
  },
  excluirUsuario: async (req, res) => {
    try {
      const id = req.params.id;
      await usuarioModel.excluirUsuario(id);
      // Tire o 'n' de rendirect e coloque a '/' antes de produtos:
      res.redirect("/usuario/listar");
    } catch (erro) {
      console.log(
        `o erro foi vc amar dms ${erro} e tbm esse ai de excluir o produto`,
      );
    }
  },
};
