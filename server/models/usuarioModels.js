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
    return resultado.inserId;
  },
};
