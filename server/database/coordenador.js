const { DataTypes} = require("Sequelize");
const sequelize = require("./Database"); 
const Usuario = require("./usuario");

const Coordenador = sequelize.define('Coordenador',{
        id_Coordenador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        modelName: "Coordenador",
        tableName: 'coordenador',
        timestamps: false,
      }
    );
    
      async function sincronizarCoordenador() {
        try {
          await Coordenador.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
     
      module.exports = Coordenador;