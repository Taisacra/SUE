function App() {
  return (
    <nav className="sidebar">
    <div className="App">
      <img src="./img/logo_sue.jpeg" id="icone_sue" alt="Sue"></img>
      <p className="sue_infos">
        <span className="itemDescription">
          SUE
        </span>
        <span className="itemDescription">
          - Sistema Unificado Estudantil
        </span>
      </p>
    </div>
    <ul className="sideItens">
      <li className="sideItem">
        <a href="#">
        <span className="itemDescricao">
          Usuario
        </span>
        </a>  
      </li>
      <li className="sideItem">
      <a href="#">
        <span className="itemDescricao">
          Aluno
        </span>
        </a>
      </li>
      <li className="sideItem">
      <a href="#">
        <span className="itemDescricao">
          Professor
        </span>
        </a>
      </li>
      <li className="sideItem">
      <a href="#">
        <span className="itemDescricao">
          Coordenador
        </span>
        </a>
      </li>
      <li className="sideItem">
      <a href="#">
        <span className="itemDescricao">
          Curso
        </span>
        </a>
      </li>
      <li className="sideItem">
      <a href="#">
        <span className="itemDescricao">
          Turma
        </span>
        </a>
      </li>
      <li className="sideItem">
        <a href="#">
          <span className="itemDescricao">
          Pagamento
          </span>
        </a>
      </li>
    </ul>
   
    </nav>
  );
}

export default App;
