const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Usuario = require("./usuario");
const Professor = require("./professor");

const UsuarioProfessor = connection.define('UsuarioProfessor',{
        id_professor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: Professor,
                key: "idProfessor",
              },
          },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
              model: Usuario,
              key: "idUsuario",
          },
        },
        nome_usuario: {
            type: DataTypes.STRING(45),
            allowNull: false,

        },
        titulo: {
          type: DataTypes.STRING(45),
          allowNull: false,
        }
    },
      {
        tableName: "usuarioprofessor",
        timestamps: false,
      }
    );
    
      async function sincronizarUsuarioProfessor() {
        try {
          await UsuarioProfessor.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
     
      module.exports = UsuarioProfessor;