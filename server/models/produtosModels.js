// Importar as configurações do banco
const db = require("../config/db.js");
const { editarProduto } = require("../controller/produtosController.js");
module.exports = {
  // função de criar passando imformaçoes
  criarProduto: async (
    codigo_interno,
    nome,
    categoria,
    unidade_venda,
    preco,
    imagem,
    esta_ativo,
  ) => {
    // query para fazer a operação no banco
    const sql = `INSERTE INTO tb_ocorrencias(codigo_interno, nome, categoria, unidade_venda, preco, imagem, esta_ativo)
                VALUES (?, ?, ?, ?, ?, ?, ?)`;
    // Faz a operação no banco e retorna o id do produto inserido
    const [resultado] = await db.execute(sql, [
      codigo_interno,
      nome,
      categoria,
      unidade_venda,
      preco,
      imagem,
      esta_ativo,
    ]);

    // retornar o id do produto

    return resultado.insertId;
  },
  // Read
  listarProdutos: async () => {
    // query para fazer a operação no banco
    const sql = `SELECT * FROM  tb_produtos`;
    // faz a opéração
    const [resultado] = await db.execute(sql);
    // retornar a lista de produto
    return resultado;
  },
  // Delete
  excluirProduto: async (id) => {
    const sql = `DELETE FROM tb_produtos WHERE id_produto = ?`;
    await db.execute(sql, [id]);
  },

  // update
  buscarId: async (id) => {
    // query para fazer a operação no banco
    const sql = `SELECT * FROM tb_produtos WHERE id_produto= ?`;
    // faz a opéração
    const [linhas] = await db.execute(sql, [id]);
    // retornar a lista de produto
    return linhas[0];
  },
  editarProduto: async (
    id,
    codigo_interno,
    nome,
    categoria,
    unidade_venda,
    preco,
    imagem,
    esta_ativo,
  ) => {
    const sql = `UPDATE tb_produtos SET codigo_interno = ?, nome = ?, categoria = ?, unidade_venda = ?, preco = ?, imagem = ?, esta_ativo = ? WHERE id_produto = ?`;
    const [resultado] = await db.execute(sql, [
      codigo_interno,
      nome,
      categoria,
      unidade_venda,
      preco,
      imagem,
      esta_ativo,
      id,
    ]);
    return resultado;
  },
};
