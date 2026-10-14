import './index.scss';
import Cabecalho from '../../component/cabecalho';
export default function Cadastro() {
  
  function Nome (e){
    let nome = e.target.value;
    alert('Nome inserido: '+nome)
  }
  
  function Cargo (e){
    let cargo = e.target.value;
    alert('Cargo escolhido: '+cargo)
  }

  function Mouse (){  
    alert('o mouse entrou')
  }

  function MouseS(){
    alert('o mouse saiu')
  }

  function Clique(){
    alert('Funcionário cadastrado!')
  }

    return (


  <div className='tudo-cadastro'>

      <Cabecalho titulo="Cadastro de Funcionário" />


    <div className='cubo'>
      <h1>Cadastro de funcionario</h1>
        
        <div className='funcionario'>
          <h2>Nome do Funcionario</h2>
        <input onChange={Nome} type='text'  placeholder='coloque seu nome' />
        </div>

        <br />
        <h2>escolha seu cargo</h2>
        <select className='opçoes' onChange={Cargo} type='text' placeholder='Selecione um cargo'>
          <option value="">Selecione um cargo</option>
          <option value="administração">administração</option>
          <option value="recursos humanos">recursos humanos</option>
          <option value="financeiro">financeiro</option>
          <option value="marketing">marketing</option>
          <option value="TI">TI</option>
        </select>
          
        <div className='Tipo'>
          <h2>Tipo de Funcionário</h2>
          <label><input type='radio' name='tipo' value='efetivo' /> efetivo</label>
          <label><input type='radio' name='tipo' value='temporário' /> temporário</label>
          <label><input type='radio' name='tipo' value='estagiario' /> estagiário</label>
          <label><input type='radio' name='tipo' value='jovem aprendiz' /> jovem aprendiz</label>
        </div>

        <br />

        <div className='mous'>
          <input onMouseEnter={Mouse} onMouseLeave={MouseS} placeholder='PASSE O MOUSE AQUI' />
        </div>

        <br />

        <div className='clique'>
          <button onClick={Clique} placeholder='Cadastrar Funcionario'>Cadastrar Funcionario</button>
        </div>


        </div>
      

      </div>
  );
}