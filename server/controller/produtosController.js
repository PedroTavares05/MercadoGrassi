//  importando o model
const produtosModel = require("../models/produtosModels.js");
module.exports = {
  // Logica do crud

  // Create
  //Acessar a pagina
  renderizarCadastro: (req, res) => {
    res.send("Abrindo Pagina de Cadastro");
  },
  // Cadastrar produto
  cadastrar: (req, res) => {
    produtosModel.criarProduto();
    res.end();
  },
};
