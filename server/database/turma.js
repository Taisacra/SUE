const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Curso = require("./curso");

const Turma = connection.define('Turma',{
        id_Turma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          turno: {
              type: DataTypes.STRING(45),
              allowNull: false,
          },
          id_Curso: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references:{
                model: Curso,
                key: "id_curso",
              },
          },
    },
      {
        tableName: 'turma',
        timestamps: false,
      }
    );
    
      async function sincronizarTurma() {
        try {
          await Turma.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = Turma;