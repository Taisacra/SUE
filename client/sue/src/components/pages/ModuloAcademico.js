import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Container from '../layout/Container'; // Assumindo que você tem um componente Container
import FormularioUsuario from './FormularioUsuario';

function ModuloAcademico() {
    const [usuarios, setUsuarios] = useState([]);

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

    return (
        <Container>
            <h1>Modulo Academico</h1>
            <FormularioUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
        </Container>
    );
}

export default ModuloAcademico;
