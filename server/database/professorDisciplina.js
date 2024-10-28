const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Professor = require("./professor");
const Disciplina = require("./disciplina");

const ProfessorDisciplina = connection.define('ProfessorDisciplina',{
        
        id_professorDisciplina: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        id_professor: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false,
          references:{
            model: Professor,
            key: "idProfessor",
          },
        },
        id_disciplina: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false,
          references:{
            model: Disciplina,
            key: "id_disciplina",
          },
        },
    },
      {
        tableName: "professordisciplina",
        timestamps: true,
      }
    );
    
      async function sincronizarProfessorDisciplina() {
        try {
          await ProfessorDisciplina.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
      
      module.exports = ProfessorDisciplina;