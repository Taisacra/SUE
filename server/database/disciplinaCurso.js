const { DataTypes, Sequelize } = require("sequelize");
const connection = require("./Database");
const Disciplina = require("./disciplina");
const Curso = require("./curso");

const DisciplinaCurso = connection.define('DisciplinaCurso',{
    id_disciplina_curso:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_disciplina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Disciplina,
        key: "id_disciplina",
      },
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Curso,
        key: "id_curso",
      },
    },
  },
  {
    tableName: "disciplinaCurso",
    timestamps: true,
  }
);

async function sincronizarDisciplinaCurso() {
  try {
    await DisciplinaCurso.sync({ force: true });
  } catch (error) {
    console.error("Erro ao sincronizar a tabela: ", error);
  } finally {
    await connection.close();
    console.log("Conexão fechada.");
  }
}


module.exports = DisciplinaCurso;
