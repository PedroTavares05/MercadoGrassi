const usuarioModel = require("../models/usuarioModels.js")
const { cadastrar } = require("./produtosController.js")

module.exports= {
    // Acessar usuario
    redenrizarUser: (req,res)=> {
        res.send("Acessando Usuario")
    },

    cadastrar: async(req,res) =>{
        try{
            const {nome,email,senha,perfil,esta_ativo}=req.body
            const publico_bool = esta_ativo === "1" || esta_ativo === "true";

            await usuarioModel.criarUsuario(nome, email, senha, perfil, esta_ativo);
            res.redirect("/")

        }
        catch(erro){

            console.log(`o erro foi ${erro}`)
        }
    }
}