const { DataTypes} = require("Sequelize");
const sequelize = require("./Database"); 
const Turma = require("./turma");
const Curso = require("./curso");

const TurmaCurso = sequelize.define('TurmaCurso',{
        id_Turma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: Turma,
                key: "id_Turma",
            },
        },
        turno: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        id_Curso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
              model:Curso,
              key:"id_curso",
            },
        },
        nome: {
            type: DataTypes.STRING(45),
            allowNull: false,
            refereces: {
                model:Curso,
                key:"id_curso",
            },
        },   
    },
      {
        sequelize,
        modelName: "TurmaCurso",
        tableName: "turmacurso",
        timestamps: false,
      }
    );
    
      async function sincronizarTurmaCurso() {
        try {
          await TurmaCurso.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
     
      module.exports = TurmaCurso;