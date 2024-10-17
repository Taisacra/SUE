import styles from './MenuLateral.module.css';
import React, {useState} from 'react';

function MenuLateral() {
   // Estado para controlar a visibilidade do submenu
  const[isSubmenuVisible, setIsSubmenuVisible] = useState(false);
   
  // Função para alternar a visibilidade do submenu
  function toggleSublist(){
    setIsSubmenuVisible(!isSubmenuVisible);
  }


  return (
   <div className="container">
     <div className="menu">
     <ul>
        <li>
          <a href="#" onClick={toggleSublist}><i className="menuItem">&#128100;</i> Usuário</a>
          {/* Mostrando ou escondendo o submenu com base no estado */}
            <ul class="submenu" style={{display: isSubmenuVisible? 'block': 'none'}}>
              <li><a href="#"><i className="menuItem">&#128101;</i> Aluno</a></li>
              <li><a href="#"><i className="menuItem">&#128188;</i> Coordenador</a></li>
              <li><a href="#"><i className="menuItem">&#127979;</i> Professor</a></li>
              <li><a href="#"><i className="menuItem">&#128179;</i> Responsável Financeiro</a></li>
            </ul>
          </li>
        <li><a href="#"><i className="menuItem">&#128218;</i> Curso</a></li>
        <li><a href="#"><i className="menuItem">&#128195;</i> Tuma</a></li>
        <li><a href="#"><i className="menuItem">&#128179;</i> Pagamento</a></li>
        <li><a href="#"><i className="menu-item">&#127968;</i>Home</a></li>
        <li><a href="#"><i className="menu-item">&#10060;</i>Sair</a></li>
     </ul>
     </div>
     <div className="content">
        <h1>Conteúdo Principal</h1>
        <p>Bem-vindo ao painel!</p>
     </div>
   </div>
   
  );
}

export default MenuLateral;
