//  importando o model
const produtosModel = require("../models/produtosModels.js");
module.exports = {
  // Logica do crud

  // Create
  //Acessar a pagina
  renderizarCadastro: (req, res) => {
    res.render("produtos/cadastrar");
  },
  // Cadastrar produto
  cadastrar: async (req, res) => {
    try {
      // pegar as imformações  do body
      const {
        codigo_interno,
        nome,
        categoria,
        unidade_venda,
        preco,
        imagem,
        esta_ativo,
      } = req.body;

      // conversão do estado do produto
      const publico_bool = esta_ativo === "1" || esta_ativo === "true";

      // chama o model para ativar a execução no banco da ffunção criar
      await produtosModel.criarProduto(
        codigo_interno,
        nome,
        categoria,
        unidade_venda,
        preco,
        imagem,
        publico_bool,
      );

      // Redirecionar o usuario
      res.redirect("/");
    } catch (erro) {
      console.log(
        `o erro foi vc amar dms ${erro} e tbm erro ao cadastrar o produto`,
      );
    }
  },
  // Pede a Lista Para o Model, e Renderiza a Pagina com a Lista
  listarTodosProdutos: async (req, res) => {
    try {
      // Coloque 'produtos' no plural aqui também:
      const produtos = await produtosModel.listarProdutos();

      // Agora { produtos } encontra a variável acima
      res.render("produtos/listar", { produtos });
    } catch (erro) {
      console.log(
        `o erro foi vc amar dms ${erro} e tbm esse ai de listar os produtos`,
      );
    }
  },
  // excluir
  excluirProduto: async (req, res) => {
    try {
      const id = req.params.id;
      await produtosModel.excluirProduto(id);
      // Tire o 'n' de rendirect e coloque a '/' antes de produtos:
      res.redirect("/produtos/listar");
    } catch (erro) {
      console.log(
        `o erro foi vc amar dms ${erro} e tbm esse ai de excluir o produto`,
      );
    }
  },
  // atualizar
  renderizarEditar: async (req, res) => {
    try {
      const id = req.params.id;
      const produto = await produtosModel.buscarId(id);

      if (!produto) {
        console.log("Nenhum produto encontrado para o ID:", id);
        return res.redirect("/produtos/listar");
      }

      res.render("produtos/editar", { produto });
    } catch (erro) {
      console.log(
        `o erro foi vc amar dms ${erro} e tbm esse ao buscar o produto`,
      );
    }
  },
  editarProduto: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        codigo_interno,
        nome,
        categoria,
        unidade_venda,
        preco,
        imagem,
        esta_ativo,
      } = req.body;

      const publico_bool = esta_ativo === "1" || esta_ativo === "true" ? 1 : 0;

      await produtosModel.editarProduto(
        id,
        codigo_interno,
        nome,
        categoria,
        unidade_venda,
        preco,
        imagem,
        publico_bool,
      );

      res.redirect("/produtos/listar");
    } catch (erro) {
      console.log(`Erro ao editar produto: ${erro}`);
    }
  },
};
