const express = require('express');
const app = express();
app.use(express.json());
const port = 3600;

const connection = require("./database/Database");

const Aluno = require("./routes/alunoRouts");
const Usuario = require("./routes/usuarioRouts");
const Coordenador = require("./routes/coordenadorRouts");
const Curso = require('./database/curso');
const Disciplina = require("./routes/disciplinaRouter");
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


Usuario.sincronizarUsuario;
Aluno.sincronizarAluno;
Coordenador.sincronizarCoordenador;
Curso.sincronizarCurso;
Disciplina.sincronizarDisciplina;
CoordenadorCurso.sincronizarCoordenadorCurso;
Professor.sincronizarProfessor;
ResponsavelFinanceiro.sicronizarResponsavelFinanceiro;
Turma.sicronizarTurma;
TurmaCurso.sincronizarTurmaCurso;
TurmaAluno.sincronizarTurmaAluno;
TurmaDisciplina.sicronizarTurmaDisciplina;
ProfessorDisciplina.sincronizarProfessorDisciplina;
UsuarioAluno.sincronizarUsuarioAluno;
UsuarioCoordenador.sicronizarUsuarioCoordenador;
UsuarioResponsavelFinanceiro.sicronizarUsuarioResponsavelFinanceiro;
UsuarioProfessor.sicronizarUsuarioProfessor;
Pagamento.sincronizarPagamento;

app.use("/", Aluno);
app.use("/", Usuario);
app.use("/", Coordenador);
app.use("/", Disciplina);










app.listen(3600,()=>{
   console.log("Rodando")
})

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) =>{
        console.log("DEU RUIMM!!");
        console.log(msgErro);
    });