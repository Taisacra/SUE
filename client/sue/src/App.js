import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import ModuloAcademico from './components/pages/ModuloAcademico';
import ModuloAdministrativo from './components/pages/ModuloAdministrativo';
import Container from './components/layout/Container';
//import Axios from "axios";

function App() {
  return (
    <Router>
     <div>
      <nav>
        <Link to="/moduloAcademico">Modulo Academico</Link>
        <Link to="/moduloAdministrativo">Modulo Administrativo</Link>
      </nav>
     </div>
     <Container className="min-height"> {/* Aplica a classe .min-height */}
        <Routes>
          <Route path="/moduloAcademico" element={<ModuloAcademico />} />
          <Route path="/moduloAdministrativo" element={<ModuloAdministrativo />} />
        </Routes>
      </Container>
      <footer>
        <p>&copy; 2024 SUE- SISTEMA UNIFICADO ESTUDANTIL. Todos os diteiros reservados. </p>
      </footer>
    
    </Router>
   
    
   );
    
}

export default App;