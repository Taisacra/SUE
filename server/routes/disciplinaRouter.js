const { application } = require('express');
const express = require('express');
const Disciplina = require('../database/disciplina');
const Router = express.Router();



Router.get("/", async (req,res)=>{
    try {
        const disciplinas = await Disciplina.findAll({
            raw: true,
            order: [["id_disciplina", "ASC"]],
        });
        if(!disciplinas || disciplinas.length === 0){
            return res
            .status(404)
            .json({message:"Nehuma disciplina encontrada."});
        }
       res.status(200).json({disciplinas});
    } catch (error) {
        console.error("Erro ao buscar disciplina ", error)
        res.status(500).json({error: " Erro ao buscar disciplina"});
    }
});

Router.post("/editar_disciplina", async (req,res)=>{
    const{ nome_disciplina, carga_horaria, descricao_disciplina, action} = req.body
    if(action === "incluir"){
        try {
            const disciplinas = await Disciplina.create({
                nome_disciplina,
                carga_horaria,
                descricao_disciplina,
            });
            res.status(201).json(disciplinas);
        } catch (error) {
            console.error("Erro ao inserir dados em disciplina", error)
            res.status(500).json({error: "Erro ao inserir dados para disciplina."})
        }
    }

    if(action == "Alterar"){
        try {
            const {id_disciplina} = req.body;
            const disciplina = await Disciplina.findByPk(id_disciplina);
            if(!disciplina){
                return res
                .status(400)
                .json({
                    error: `Disciplima mão foi encontrado = Id: ${id_disciplina}`
                });
            }

            disciplina.nome_disciplina = nome_disciplina;
            disciplina.carga_horaria = carga_horaria;
            disciplina.descricao_disciplina = descricao_disciplina;
            await disciplina.save();
            res.status(200).json(disciplina);
        } catch (error) {
            console.log(disciplina);
            console.error(`Erro ao ALTERAR PARA DISCIPLINA ${nome_disciplina}`,  error);
            res 
            .status(500)
            .json({
                error: `Erro ao ALTERAR dados para DISCIPLINA ${nome_disciplina}`,
            });
           
        }
    }
});
    



Router.delete('/excluir/:id', async(req,res)=>{
    try {
        const id = req.params.id
        const disciplina = await Disciplina.findByPk(id)
        if(!disciplina){
            return res.status(404).json({error: "ID não encontrado."})
        }
        await Disciplina.destroy({where:{id_disciplina:id}})
        res.redirect("/");
    } catch (error) {
        console.error("Erro ao excluir dados da tabela de disciplina.", error);
        res
        .status(500)
        .json({error: "Erro ao excluir dados da tabela de disciplina"});
    }
})

module.exports = Router