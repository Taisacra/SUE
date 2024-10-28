const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Usuario = require("./usuario");
const ResponsavelFinanceiro = require("./responsavelFinanceiro")

const UsuarioResponsavelFinanceiro = connection.define('UsuarioResponsavelFinanceiro',{
        id_responsavel_financeiro: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: ResponsavelFinanceiro,
                key: "id_responsavelFinanceiro",
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
        tableName: "usuarioresponsavelfinanceiro",
        timestamps: false,
      }
    );
    
      async function sincronizarUsuarioResponsavelFinanceiro() {
        try {
          await UsuarioResponsavelFinanceiro.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
      
      module.exports = UsuarioResponsavelFinanceiro;