const { DataTypes} = require("sequelize");
const sequelize = require("./Database"); 

const Disciplina = sequelize.define('Disciplina',{
        id_disciplina: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          nome_disciplina: {
            type: DataTypes.STRING(50),
            allowNull: false,
          },
          carga_horaria: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          descricao_disciplina: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
    },
      {
        sequelize,
        modelName: "Disciplina",
        tableName: 'disciplina',
        timestamps: false,
      }
    );
    
      async function sincronizarDisciplina() {
        try {
          await Disciplina.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
      module.exports = Disciplina;