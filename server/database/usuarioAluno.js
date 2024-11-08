const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database"); 
const Aluno = require("./aluno");
const Usuario = require("./usuario");

const UsuarioAluno = connection.define('UsuarioAluno',{
        id_aluno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: Aluno,
                key: "id_aluno",
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
        email:{
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    },
      {
        tableName: "usuarioaluno",
        timestamps: false,
      }
    );
    
      async function sincronizarUsuarioAluno() {
        try {
          await UsuarioAluno.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
     
      module.exports = UsuarioAluno;