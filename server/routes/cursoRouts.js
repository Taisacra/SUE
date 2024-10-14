const express = require('express');
const Curso = require('../database/curso');
//const Coordenador = require('../database/coordenador');
const Router = express.Router();

app.get("/curso", async (req, res) => {
    try {
      const cursos = await Curso.findAll();
      //const usuariocoordenadores = await UsuarioCoordenador.findAll();
      //const coordenadorcursos = await CoordenadorCurso.findAll();
      res.render("cad_curso", {
        cursos,
        usuariocoordenadores: usuariocoordenadores,
        coordenadorcursos: coordenadorcursos,
      });
    } catch (error) {
      console.error("Erro ao buscar associações de coordenador a tabela de curso:", error);
      res.status(500).send("Erro ao buscar associações de coordenador a tabela de curso");
    }
  });
  
  
  app.post("/editar_curso", async (req, res) => {
    try {
      const { coordenador, nome, action, id_curso } = req.body;
  
      if (action === "incluir") {
        await Curso.create({
          id_Coordenador: coordenador,
          nome: nome,
        });
      } else if (action === "alterar") {
        await Curso.update(
          { id_Coordenador: coordenador, nome: nome },
          { where: { id_curso: id_curso } }
        );
      } else {
        return res.status(400).send("Ação inválida.");
      }
  
      res.redirect("/curso");
    } catch (error) {
      console.error("Erro ao inserir ou editar curso:", error);
      res.status(500).send("Erro ao inserir ou editar curso.");
    }
  });
  
  
  app.post("/excluir_curso/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await Curso.destroy({ where: { id_curso: id } });
      res.redirect("/curso");
    } catch (error) {
      console.error("Erro ao excluir curso:", error);
      res.status(500).send("Erro ao excluir curso.");
    }
  });

  module.exports = Router  