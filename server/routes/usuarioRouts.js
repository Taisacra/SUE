const express = require('express');
const Usuario = require('../database/Usuario');
const Router = express.Router();



Router.get("/usuario", async (req,res)=>{
    try {
        const usuarios = await Usuario.findAll({
            raw: true
        });
        console.log(usuarios);
        if(!usuarios || usuarios.length === 0){
            return res
            .status(404)
            .json({message:"Nehum usuário encontrado."});
        }
       res.status(200).json({usuarios});
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.post("/usuario/criar", async (req,res)=>{
    try {
        const{
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
        } = req.body

        await Usuario.create({
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
        })
        res.status(201)
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.put("/usuario/aditar/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const{
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
            complemento
        } = req.body
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            res.status(401).json("ID não encontrado.")
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
        usuario.save();
    } catch (error) {
        res.status(401)
    }
})

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