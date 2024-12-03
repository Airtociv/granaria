import './App.css';
import Acesso from './paginas/Acesso';
import Editar from './paginas/Editar';
import Pesquisa from './paginas/Pesquisa';
import Recap from './paginas/Recap';
import Registrar from './paginas/Registrar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Acesso/>} />
        <Route path="/login" element ={<Acesso/>} />
        <Route path="/home" element ={<Recap/>} />
        <Route path="/busca" element ={<Pesquisa/>} />
        <Route path="/produto/cadastro" element ={<Registrar/>} />
        <Route path="/produto/editar/:id" element ={<Editar/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
