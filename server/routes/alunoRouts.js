const express = require('express');
const Aluno = require('../database/aluno');
const Router = express.Router();



Router.get("/aluno", async (req,res)=>{
    try {
        res.send('Servidor rodando na porta 3600!');
        const alunos = await Aluno.findAll({
            raw: true
        });
        console.log(alunos);
        if(!alunos || alunos.length === 0){
            return res
            .status(404)
            .json({message:"Nehum aluno encontrado."});
        }
       res.status(200).json({alunos});
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.post("/atividade/criar", async (req,res)=>{
    try {
        const{
            email,
            idUsuario,
        } = req.body

        await Aluno.create({
            email,
            idUsuario,
        })

        res.status(201)
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.put("/aluno/aditar/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const{
            email,
            idUsuario
        } = req.body
        const aluno = await Aluno.findByPk(id)
        if(!aluno){
            res.status(401).json("ID não encontrado.")
        }
        aluno.email = email;
        aluno.idUsuario = idUsuario;
        aluno.save();
    } catch (error) {
        res.status(401)
    }
})

Router.delete('/aluno/excluir/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const aluno = await Aluno.findByPk(id)
        if(!aluno){
            res.status(401).json("ID não encontrado.")
        }
        await Aluno.destroy({where:{id_aluno:id}})
        res.status(201)
    } catch (error) {
        res.status(401)
    }
})

module.exports = Router