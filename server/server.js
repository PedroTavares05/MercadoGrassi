// Usa as Infos do .env
require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;

// Importar o modulo de caminhos (Modulo Path)
const path = require("path");

// Configurara o EJS
app.set("view engine", "ejs");

// Aponta onde estão as paginas
app.set("views", path.join(__dirname, "../client/views"));
// Deixa  a pasta public visivel ao express
app.use(express.static(path.join(__dirname, "../client/public")));

// Rota inical
app.get("/", (req, res) => {
  res.render("index");
});

// Subrotas de produtos
const produtosRoutes = require("./routes/produtosRoutes.js");
app.use("/produtos", produtosRoutes);

// Subrotas de Usuario
const usuarioRoutes = require("../server/routes/usuarioRoutes.js");
app.use("/usuario", usuarioRoutes);

// Sobe o banco
app.listen(port, () => {
  console.log(`http://localhost${port}`);
});
//Conecta o Banco
const pool = require("./config/db.js");
(async () => {
  try {
    await pool.getConnection();
    console.log("Banco conectado");
  } catch (error) {
    console.log(`Erro ao conectar ao banco ${error}`);
    process.exit(1);
  }
})();
