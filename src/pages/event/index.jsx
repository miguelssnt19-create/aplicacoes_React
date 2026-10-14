import './index.scss';
import Cabecalho from '../../component/cabecalho';

export default function Evento(){
    
    function Alterou(){
        alert('voce mudou tudo seu duente')
    }
    function AlterouB(e){
        let valor = e.target.value;
        alert('voce mudou o valor para '+ '' + valor);
    }
    
    return(
    <div className='tudo-event'>

        <Cabecalho titulo="Evento" />

        <div className='cubico'>
            <h1>titulo generico</h1>
            <p>texto que eu coloquei aqui para ficar como de enche linguiça entao so ignore este texto se voce leu este texto até aqui voce realmente esta curioso com oque tem no final mais infelizmente nao há nada no final deste mini texto bem pequeno e voce so perdeu tempo da sua vida lendo este pequenininho texto por causa da sua curiosidade imensa é como aquele ditado a curiosidade matou o gato</p>

            <div className='texto' >
                <input onChange={AlterouB} type='text'  placeholder='escreva algo mane' />
                
            </div>

            <br/>

          <select className='selecione'>
            <option>selecione</option>
            <option>opção 1</option>
            <option>opção 2</option> 
          </select>
        
        <div className='opcao'>
            <label>
                <input type='radio' name='opcao'/>
                opção 1
            </label>

            <label>
                <input type='radio' name='opcao'/>
                opção 2
            </label>

            <label>
                <input type='radio' name='opcao'/>
                opção 3
            </label>

            <label>
                <input type='radio' name='opcao'/>
                opção 4
            </label>
        </div>

        <button>clica aqui</button>

        </div>
    </div>
    );
}