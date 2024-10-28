const { DataTypes} = require("Sequelize");
const sequelize = require("./Database").default;
const Usuario = require("./usuario"); 

const ResponsavelFinanceiro = sequelize.define('ResponsavelFinanceiro', {
        id_responsavelFinanceiro: {
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
        modelName: "ResponsavelFinanceiro",
        tableName: "responsavelFinanceiro",
        timestamps: false,
      }
    );
    
      async function sincronizarResponsavelFinanceiro() {
        try {
          await ResponsavelFinanceiro.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
      
      module.exports = ResponsavelFinanceiro;