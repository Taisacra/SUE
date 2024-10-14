const { DataTypes} = require("sequelize");
const sequelize = require("./Database");
const Usuario = require("./usuario");

const Aluno = sequelize.define('Aluno',{
        id_aluno: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING(45),
          allowNull: false,
          primaryKey: false,
          autoIncrement: false,
        },
        idUsuario: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references:{
            model: Usuario,
            key: "idUsuario",
          },
        },
    },
      {
        sequelize,
        modelName: "Aluno",
        tableName: 'aluno',
        timestamps: false,
      }
    );
    
      async function sincronizarAluno() {
        try {
          await Aluno.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = Aluno;


    