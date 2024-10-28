const { DataTypes} = require("Sequelize");
const sequelize = require("./Database").default; 
const Coordenador = require("./coordenador");
const Usuario = require("./usuario");

const UsuarioCoordenador = sequelize.define('UsuarioCoordenador',{
        id_Coordenador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: Coordenador,
                key: "id_Coordenador",
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
    },
      {
        sequelize,
        modelName: "UsuarioCoordenador",
        tableName: "usuariocoordenador",
        timestamps: false,
      }
    );
    
      async function sincronizarUsuarioCoordenador() {
        try {
          await UsuarioCoordenador.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
    
      module.exports = UsuarioCoordenador;