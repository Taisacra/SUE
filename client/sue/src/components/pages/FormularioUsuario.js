import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function FormularioUsuario({ usuarios, setUsuarios }) {
    const [formData, setFormData] = useState({
      idUsuario: '999999',
      nome_usuario: '',
      cpf: '',
      telefone: '',
      data_nascimento: '',
      cep: '',
      rua: '',
      numero_casa: '',
      bairro: '',
      cidade: '',
      estado: '',
      complemento: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleIncluir = () => {
        Axios.post("http://localhost:3000/editar_usuario", {
          nome_usuario: formData.nome_usuario,
          cpf: formData.cpf,
          telefone: formData.telefone,
          data_nascimento: formData.data_nascimento,
          cep: formData.cep,
          rua: formData.rua,
          numero_casa: formData.numero_casa,
          bairro: formData.bairro,
          cidade: formData.cidade,
          estado: formData.estado,
          complemento: formData.complemento,
          action: "incluir",
        })
        .then((response) => {
          setUsuarios([...usuarios, response.data]);
          setFormData({
            idUsuario: '',
            nome_usuario: '',
            cpf: '',
            telefone: '',
            data_nascimento: '',
            cep: '',
            rua: '',
            numero_casa: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: ''
          });
        })
        .catch((error) => {
          console.error("Erro ao incluir usuario:", error);
        });
      };
    
      const handleAtualizar = () => {
        Axios.post("http://localhost:3000/editar_usuario", {
          nome_usuario: formData.nome_usuario,
          cpf: formData.cpf,
          telefone: formData.telefone,
          data_nascimento: formData.data_nascimento,
          cep: formData.cep,
          rua: formData.rua,
          numero_casa: formData.numero_casa,
          bairro: formData.bairro,
          cidade: formData.cidade,
          estado: formData.estado,
          complemento: formData.complemento,
          action: "alterar",
        })
        .then((response) => {
          setUsuarios(usuarios.map((usuario) =>
            usuario.idUsuario === response.data.idUsuario ? response.data : usuario
          ));
          setFormData({
            idUsuario: '',
            nome_usuario: '',
            cpf: '',
            telefone: '',
            data_nascimento: '',
            cep: '',
            rua: '',
            numero_casa: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: ''
          });
        })
        .catch((error) => {
          console.error("Erro ao atualizar usuario:", error);
        });
      };
    
      const handleCarregar = (usuario) => {
        setFormData({
          idUsuario: usuario.idUsuario,
          nome_usuario: usuario.nome_usuario,
          cpf: usuario.cpf,
          telefone: usuario.telefone,
          data_nascimento: usuario.data_nascimento,
          cep: usuario.cep,
          rua: usuario.rua,
          numero_casa: usuario.numero_casa,
          bairro: usuario.bairro,
          cidade: usuario.cidade,
          estado: usuario.estado,
          complemento: usuario.complemento
        });
      };
      
      const handleExcluir = (idUsuario) => {
      Axios.post(`http://localhost:3000//usuario/excluir/${idUsuario}`)
        .then(() => {
          // Remove a disciplina excluída da lista de disciplinas no estado
          setUsuarios(usuarios.filter(usuario => usuario.idUsuario !== idUsuario));
        })
        .catch((error) => {
          console.error("Erro ao excluir usuario:", error);
        });
    };
    
    return(
        <div>
          <h2>Cadastro de Usuarios</h2>
          <form>
            <div>
              <label>Matrícula:</label>
              <input
                type="text"
                name="id_disciplina"
                value={formData.id_disciplina || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Nome:</label>
              <input
                type="text"
                name="nome_usuario"
                value={formData.nome_usuario || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>CPF:</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Telefone:</label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Nascimento:</label>
              <input
                type="text"
                name="data_nascimento"
                value={formData.data_nascimento || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>CEP:</label>
              <input
                type="text"
                name="cep"
                value={formData.cep || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Rua:</label>
              <input
                type="text"
                name="rua"
                value={formData.rua || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Numero casa:</label>
              <input
                type="text"
                name="numero_casa"
                value={formData.numero_casa || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Bairro:</label>
              <input
                type="text"
                name="bairro"
                value={formData.bairro || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Cidade:</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Estado:</label>
              <input
                type="text"
                name="estado"
                value={formData.estado || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Complemento:</label>
              <input
                type="text"
                name="complemento"
                value={formData.complemento || ''} // Garantir que não seja undefined
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleIncluir}>Incluir</button>
            <button type="button" onClick={handleAtualizar}>Atualizar</button>
          </form>
          <h3>Relação de Usuarios</h3>
          <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
              <tr>
                <th>Matrícula</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Nascimento</th>
                <th>CEP</th>
                <th>Rua</th>
                <th>Numero casa</th>
                <th>bairro</th>
                <th>Cidade</th>
                <th>estado</th>
                <th>Complemento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.idUsuario}</td>
                  <td>{usuario.nome_usuario}</td>
                  <td>{usuario.cep}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.data_nascimento}</td>
                  <td>{usuario.cep}</td>
                  <td>{usuario.rua}</td>
                  <td>{usuario.numero_casa}</td>
                  <td>{usuario.bairro}</td>
                  <td>{usuario.cidade}</td>
                  <td>{usuario.estado}</td>
                  <td>{usuario.complemento}</td>
                  <td>
                    <button type="button" onClick={() => handleExcluir(usuario.idUsuario)}>
                      
                      Excluir
                    </button>
                    <button type="button" onClick={() => handleCarregar(usuario)}>
                     
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
    
        </div>
      );
    
}

export default FormularioUsuario;