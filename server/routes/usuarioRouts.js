const express = require('express');
const Usuario = require('../database/Usuario');
const Router = express.Router();



Router.get("/usuario", async (req,res)=>{
    try {
        const searchQuery = req.query.search || "";
        const usuarios = await Usuario.findAll({
            where: {
                nome_usuario: {
                    [Sequelize.Op.like]: `%${searchQuery}`,
                },
            },
        });
        console.log("Dados na rota origem",usuarios);
        res.json({usuarios});
    } catch (error) {
        console.log("Erro ao buscar alunos",error);
        res.status(500).send("Erro ao buscar usuarios");
    }
});

Router.post("/editar_disciplina", async (req,res)=>{
    const{nome_usuario, cpf, telefone, data_nascimento, cep, rua, numero_casa, bairro, cidade, estado, complemento, } = req.body
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
        } catch (error) {
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



Router.delete('/usuario/excluir/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            res.status(401).json("ID não encontrado.")
        }
        await Usuario.destroy({where:{idUsuario:id}})
        res.status(201)
    } catch (error) {
        res.status(401)
    }
})

module.exports = Router