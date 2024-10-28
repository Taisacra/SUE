const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Turma = require("./turma");
const Disciplina = require("./disciplina");

const TurmaDisciplina = connection.define('TurmaDisciplina',{
        id_TurmaDisciplina: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          id_Turma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
              model:Turma,
              key:"id_Turma",
            },
          },
          id_disciplina: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
              model:Disciplina,
              key:"id_disciplina",
            },
          },
    },
      {
        tableName: "turmaDisciplina",
        timestamps: true,
      }
    );
    
      async function sincronizarTurmaDisciplina() {
        try {
          await TurmaDisciplina.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
      module.exports = TurmaDisciplina;