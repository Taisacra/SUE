const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database"); 
const Usuario = require("./usuario");

const Professor = connection.define('Professor',{
        id_professor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING(80),
            allowNull: false,
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
        tableName: 'professor',
        timestamps: false,
      }
    );
    
      async function sincronizarProfessor() {
        try {
          await Professor.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
     
      module.exports = Professor;