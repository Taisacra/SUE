const { DataTypes} = require('sequelize');
const sequelize = require('./Database').default;



const Usuario = sequelize.define( 'Usuario',{
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_usuario: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.INTEGER(13),
        allowNull: false,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cep: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
    },
    rua: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    numero_casa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bairro: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    complemento: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Usuario",
    tableName: 'usuario',
    timestamps: false,
  }
);

  async function sincronizarUsuario() {
    try {
      await Usuario.sync({ force: false });
    } catch (error) {
      console.error("Erro ao sincronizar a tabela: ", error);
    } finally {
      await connection.close();
      console.log("Conexão fechada.");
    }
  }
  
  
  module.exports = Usuario;