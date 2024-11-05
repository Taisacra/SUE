const { application } = require('express');
const express = require('express');
//const { DataTypes, Sequelize } = require("sequelize");
//const Disciplina = require('../database/disciplina');
const Router = express.Router();
const Usuario = require('../database/usuario');


Router.get("/", async (req,res)=>{
    try {
        const usuarios = await Usuario.findAll({
           rae: true,
           order: [["idUsuario", "ASC"]],
        });
        if(!usuarios || usuarios.length === 0){
            return res
            .status(400)
            .json({message: "Nenhum usuario encontrado."});
        }
        res.status(200).json({ usuarios });
    } catch (error) {
        console.error("Erro ao buscar usuarios: ",error);
        res.status(500).json({error: "Erro ao buscar usuarios"});
    }
});

Router.post("/editar_usuario", async (req,res)=>{
    const{nome_usuario, cpf, telefone, data_nascimento, cep, rua, numero_casa, bairro, cidade, estado, complemento,action } = req.body
    if(action === "incluir"){
        try {
            const usuarios = await Usuario.create({
                nome_usuario,
                cpf,
                telefone,
                data_nascimento,
                cep,
                rua,
                numero_casa,
                bairro,
                cidade,
                estado,
                complemento,
            });
            res.status(201).json(usuarios); //Envia disciplina criada
        } catch (error) {
          console.error("Erro ao inserir dados PARA USUARIO:", error);
          res
             .status(500)
             .json({ error: "Erro ao inserir dados PARA USUARIO." });
        }
    }

    if(action === "alterar"){       
        try {
            const {idUsuario} = req.body;
            const usuario = await Usuario.findByPk(idUsuario);
            if(!usuario){
                return res
                    .status(400)
                    .json({
                        error: `Usuario não foi encontrado - Id: ${idUsuario}`
                    });
            }
            usuario.nome_usuario = nome_usuario;
            usuario.cpf = cpf;
            usuario.telefone = telefone;
            usuario.data_nascimento = data_nascimento;
            usuario.cep = cep;
            usuario.rua = rua;
            usuario.numero_casa = numero_casa;
            usuario.bairro = bairro;
            usuario.cidade = cidade;
            usuario.estado = estado;
            usuario.complemento = complemento;
            await usuario.save();
            res.status(200).json(usuario); // envia usuario criado
        } catch (error) {
            console.log(usuario);
            console.error(
                `Erro ao ALTERAR dados PARA USUARIO: ${nome_usuario}`,
                error
              );
              res
                .status(500)
                .json({
                  error: `Erro ao ALTERAR dados PARA USUARIO: ${nome_usuario}`,
                });
        }
    }
});



Router.post('/excluir/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
           return res.status(404).json({error: "ID não encontrado."})
        }
        await Usuario.destroy({where:{idUsuario:id}})
        res.redirect("/usuario");
    } catch (error) {
      console.error("Erro ao excluir dados:", error);
      res
        .status(500)
        .json({ error: "Erro ao excluir dados da tabela de usuários." });
    }
})

module.exports = Router