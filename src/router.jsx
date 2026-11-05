import './index.css';
import App from './pages/app/App.jsx';
import Contato from './pages/contato/index.jsx';
import NotFound from './pages/notfound/index.jsx';
import Evento from './pages/event/index.jsx';
import Cadastro from './pages/cadastro/index.jsx';
import Contador from './pages/contador/index.jsx';
import Descricao from './pages/descricao/index.jsx';
import Textos from './pages/textos/index.jsx';
import Calculador from './pages/calculadora/index.jsx';
import ChamadaApi from './pages/conexaoApi/index.jsx';
import Ingresso from './pages/ingresso/index.jsx';
import AtividadeExtra from './pages/unidade/index.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router(){
    return(
<BrowserRouter>
      <Routes>
        <Route path='/cadastro' element ={<Cadastro />} />
        <Route path='/evento' element ={<Evento />} />
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/contador" element={<Contador />} />
        <Route path='/descricao' element={<Descricao />} />
        <Route path='/textos' element={<Textos />} />
        <Route path='/calculadora' element={<Calculador />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/chamadaapi' element={<ChamadaApi />} />
        <Route path='/ingresso' element={<Ingresso />} />
        <Route path='/extra' element={<AtividadeExtra />} />
      </Routes>
</BrowserRouter>
    );

}