const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Aluno = require("./aluno");
const Turma = require("./turma");

const TurmaAluno = connection.define('TurmaAluno',{
        id_TurmaAluno: {
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
          id_Aluno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
              model:Aluno,
              key:"id_aluno",
            },
          },
    },
      {
        tableName: 'turmaaluno',
        timestamps: false,
      }
    );
    
      async function sincronizarTurmaAluno() {
        try {
          await TurmaAluno.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
 
      module.exports = TurmaAluno;