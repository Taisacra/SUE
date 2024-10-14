const { DataTypes} = require("Sequelize");
const sequelize = require("./Database"); 
const Curso = require("./curso");
const UsuarioCoordenador = require("./usuarioCoordenador");


const CoordenadorCurso = sequelize.define('CoordenadorCurso',{
        id_curso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references:{
                model: Curso,
                key: "id_curso",
            },
          },
          nome: {
            type: DataTypes.STRING(45),
            allowNull: false,
          },
          id_Coordenador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
              model:UsuarioCoordenador,
              key:"id_Coordenador",
            },
          },
          nome_usuario: {
            type: DataTypes.STRING(45),
            allowNull: false,
            refereces: {
                model:UsuarioCoordenador,
                key:"id_Coordenador",
            },
          },   
          idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
              model:UsuarioCoordenador,
              key:"idUsuario",
            },
          },
          
    },
      {
        sequelize,
        modelName: "CoordenadorCurso",
        tableName: "coordenadorcurso",
        timestamps: false,
      }
    );
    
      async function sincronizarCoordenadorCurso() {
        try {
          await CoordenadorCurso.sync({ force: false });
        } catch (error) {
          console.error("Erro ao sincronizar a tabela: ", error);
        } finally {
          await connection.close();
          console.log("Conexão fechada.");
        }
      }
      
   
      module.exports = CoordenadorCurso;