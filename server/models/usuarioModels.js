const db = require("../config/db.js");
module.exports = {
  verUser: () => {
    console.log("Vendo Usuario");
  },
  criarUsuario: async (nome, email, senha, perfil, esta_ativo) => {
    const sql = `INSERT INTO tb_usuarios(nome, email, senha, perfil, esta_ativo)
      VALUES (?, ?, ?, ?, ?)`;

    const [resultado] = await db.execute(sql, [
      nome,
      email,
      senha,
      perfil,
      esta_ativo,
    ]);
    return resultado.insertId;
  },
  listarUsuarios: async () => {
    const sql = `SELECT * FROM tb_usuarios`;

    const [resultado] = await db.execute(sql);

    return resultado;
  },
  excluirUsuario: async (id) => {
    const sql = `DELETE FROM tb_usuarios WHERE id_usuario = ?`;
    await db.execute(sql, [id]);
  },
};
