const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");

const app = express();
const router = express.Router();

//const Sequelize = require("sequelize");
const connection = require("./database/Database");

const alunoRouts = require("./routes/alunoRouts");
const usuarioRouts = require("./routes/usuarioRouts");
const disciplinaRouts = require("./routes/disciplinaRouter");




const coordenadorRouts = require("./routes/coordenadorRouts");
const Curso = require('./database/curso');
const CoordenadorCurso = require("./database/coordenadorCurso"); //FAZER ROUTS
const Professor = require("./database/professor");//FAZER ROUTS
const ResponsavelFinanceiro = require("./database/responsavelFinanceiro");//FAZER ROUTS
const Turma = require("./database/turma");//FAZER ROUTS
const TurmaCurso = require("./database/turmaCurso");//FAZER ROUTS
const TurmaAluno = require("./database/turmaAluno");//FAZER ROUTS
const TurmaDisciplina = require("./database/turmaDisciplina");//FAZER ROUTS
const ProfessorDisciplina = require("./database/professorDisciplina"); //FAZER ROUTS
const UsuarioAluno = require("./database/usuarioAluno");//FAZER ROUTS
const UsuarioCoordenador = require("./database/usuarioCoordenador");//FAZER ROUTS
const UsuarioResponsavelFinanceiro = require("./database/usuarioRespFinanceiro");//FAZER ROUTS
const UsuarioProfessor = require("./database/usuarioProfessor");//FAZER ROUTS 
const Pagamento = require("./database/pagamento");//FAZER ROUTS

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
port = 3000;



const start = async () =>{
    try {
        await connection.authenticate();
        console.log("Conexão estabelecida com sucesso.");
        await connection.sync({force: false});
        console.log("Tabelas sicronizadas.");
    } catch (error) {
        console.error("Não foi possivel conectar ao banco de dados: ", error)
    }
};

start();




//app.use("/alunos", alunoRouts);
app.use("/usuario", usuarioRouts );
//app.use("/coordenador", coordenadorRouts);
app.use("/disciplina", disciplinaRouts);



app.use("/", router);

app.listen(port,()=>{
   console.log(`Aplicação rodando na porta ${port}`);
})

