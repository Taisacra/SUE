const express = require('express');
const Disciplina = require('../database/disciplina');
const Router = express.Router();



Router.get("/disciplina", async (req,res)=>{
    try {
        res.send('Servidor rodando na porta 3600!');
        const disciplinas = await Disciplina.findAll({
            raw: true
        });
        console.log(disciplinas);
        if(!alunos || alunos.length === 0){
            return res
            .status(404)
            .json({message:"Nehuma disciplina encontrada."});
        }
       res.status(200).json({disciplinas});
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.post("/disciplina/criar", async (req,res)=>{
    try {
        const{
            nome_disciplina,
            carga_horaria,
            descricao_disciplina,
        } = req.body

        await Disciplina.create({
             nome_disciplina,
            carga_horaria,
            descricao_disciplina,
        })

        res.status(201)
    } catch (error) {
        console.log(error)
        res.status(401)
    }
})

Router.put("/disciplina/aditar/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const{
            nome_disciplina,
            carga_horaria,
            descricao_disciplina,
        } = req.body
        const disciplina = await Disciplina.findByPk(id)
        if(!aluno){
            res.status(401).json("ID não encontrado.")
        }
        disciplina.nome_disciplina = nome_disciplina;
        disciplina.carga_horaria = carga_horaria;
        disciplina.descricao_disciplina = descricao_disciplina;
        disciplina.save();
    } catch (error) {
        res.status(401)
    }
})

Router.delete('/disciplina/excluir/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const disciplina = await Disciplina.findByPk(id)
        if(!disciplina){
            res.status(401).json("ID não encontrado.")
        }
        await Disciplina.destroy({where:{id_disciplina:id}})
        res.status(201)
    } catch (error) {
        res.status(401)
    }
})

module.exports = Router