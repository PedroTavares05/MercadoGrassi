// Importar as configurações do banco
const db = require("../config/db.js");
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
};
