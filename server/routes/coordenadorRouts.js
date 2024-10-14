const express = require('express');
const Coordenador = require('../database/coordenador');
const Usuario = require('../database/usuario');
const Router = express.Router();

/*app.get("/coordenador", async (req, res) => {
    try {
        res.send('Servidor rodando na porta 3600!');
      const usuarios = await Usuario.findAll();
      const coordenadores = await Coordenador.findAll();
      const usuariocoordenadores = await UsuarioCoordenador.findAll();
      res.render("cad_coordenador", {
        coordenadores,
        usuariocoordenadores : usuariocoordenadores,
        usuarios,
      });
    } catch (error) {
      console.error("Erro ao buscar associações de usuario a tabela de cordenador:", error);
      res.status(500).send("Erro ao buscar associações de usuario a tabela de cordenador");
    }
  });
  
  app.post("/editar_Coordenador", async (req, res) => {
    try {
      const { usuario, action } = req.body;
  
      if (action === "incluir") {
        await Coordenador.create({
          idUsuario: usuario,
        });
        res.redirect("/coordenador");
  
      } else if (action === "alterar") {
        const id_Coordenador = req.body.id_Coordenador;
        await Coordenador.update(
          { idUsuario: usuario },
          { where: { id_Coordenador }}
        );
        res.redirect("/coordenador");
      } else {
        res.status(400).send("Ação inválida.");
      }
    } catch (error) {
      console.error(
        "Erro ao inserir ou editar associação entre usuario e coordenador:",
        error
      );
      res
        .status(500)
        .send("Erro ao inserir ou editar associação entre usuario e coordenador.");
    }
  });
    
    app.post("/excluir_coordenador/:id", async (req, res) => {
      try {
        const id = req.params.id;
        await Coordenador.destroy({ where: { id_Coordenador: id } });
        res.redirect("/coordenador");
      } catch (error) {
        console.error(
          "Erro ao excluir associação entre usuario e coordenador:",
          error
        );
        res
          .status(500)
          .send("Erro ao excluir associação entre usuario e coordenador.");
      }
    });*/

Router.get("/coordenador", async (req,res)=>{
    try {
         res.send('Servidor rodando na porta 3600!');
        const coordenadores = await Coordenador.findAll({
            raw: true
        });
        console.log(coordenadores);
        if(!coordenadores || coordenadores.length === 0){
            return res
            .status(404)
            .json({message:"Nehum coordenador encontrado."});
        }
       res.status(200).json({coordenadores});
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.post("/coordenador/criar", async (req,res)=>{
    try {
        const{
            idUsuario,
        } = req.body

        await Atividade.create({
            idUsuario,
        })
        res.status(201)
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.put("/coordenador/aditar/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const{
            idUsuario
        } = req.body
        const coordenador = await Coordenador.findByPk(id)
        if(!coordenador){
            res.status(401).json("ID não encontrado.")
        }
        coordenador.idUsuario = idUsuario;
        coordenador.save();
    } catch (error) {
        res.status(401)
    }
})

Router.delete('/coordenador/excluir/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const coordenador = await Coordenador.findByPk(id)
        if(!coordenador){
            res.status(401).json("ID não encontrado.")
        }
        await Coordenador.destroy({where:{id_coordenador:id}})
        res.status(201)
    } catch (error) {
        res.status(401)
    }
})

module.exports = Router