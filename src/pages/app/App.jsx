
import Cabecalho from '../../component/cabecalho';
import './App.css';

function App() {
  return (
    <div className="pagina-app">

      <Cabecalho titulo="Página Principal" />

      <h1>Bem-vindo à nossa aplicação</h1>
      <img src = './assets/images/images.png' alt = 'bemvindo' />
      <p>Esta é a página principal da nossa aplicação.</p>
      
    </div>
  );
}

export default App;
