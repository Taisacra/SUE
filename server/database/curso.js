const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Coordenador = require("./coordenador");

const Curso = connection.define('Curso',{
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      id_Coordenador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        refereces: {
          model:Coordenador,
          key:"id_Coordenador",
        },
      },
    },
      {
        tableName: 'curso',
        timestamps: false,
      }
    );
    
      async function sincronizarCurso() {
        try {
          await Curso.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
      module.exports = Curso;