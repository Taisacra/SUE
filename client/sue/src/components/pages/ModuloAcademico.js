import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Container from '../layout/Container'; // Assumindo que você tem um componente Container
import FormularioUsuario from './FormularioUsuario';
import FormularioDisciplina from './FormularioDisciplina';
//import MenuLateralModuloAcademico from '../layout/MenuLateralModuloAcademico'; //importa menu lateral modulo academico 

function ModuloAcademico() {

    const [usuarios, setUsuarios] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await Axios.get('http://localhost:3000/usuario');
                console.log("Dados no App: ", response.data.usuarios);
                setUsuarios(response.data.usuarios); 
            } catch (error) {
                console.error('Erro ao buscar usuarios:', error);
            }
        };

        fetchUsuarios();  // Adicionado para chamar a função
    }, []); // Dependências vazias para chamar apenas uma vez na montagem
    console.log(usuarios);


    useEffect(() => {
    const fetchDisciplinas = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/disciplina');
            console.log("dados no App: ", response.data.usuarios );
            setDisciplinas(response.data.disciplinas);
        } catch (error) {
            console.error("Erro ao buscar disciplina", error)
        }
    };

    fetchDisciplinas();  // Adicionado para chamar a função
    }, []); // Dependências vazias para chamar apenas uma vez na montagem

    console.log(disciplinas);

    return (
        <Container>
            <div>
                <h1>Modulo Academico</h1>
                <FormularioUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
            </div>
            <div>
            <   FormularioDisciplina disciplinas={disciplinas} setDisciplinas={setDisciplinas}/>
            </div>

        </Container>
        
    );
}

export default ModuloAcademico;
