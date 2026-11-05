import './index.css';
import { useState } from 'react';
import Cabecalho from '../../component/cabecalho';


export default function AtividadeExtra() {
    const[quantidade, setQuantidade] = useState(1);
    const [pequeno, setPequeno] = useState(false);
    const [medio, setMédio] = useState(false);
    const [grande, setGrande] = useState(false);
    const [cupom, setCupom] = useState('');
    const [total, setTotal] = useState(0);
    const [meiaentrada, setMeiaentrada] = useState(false);
    let Valor_Ingresso = 1

    



    function Cupom(){

        
        let somar = quantidade * Valor_Ingresso;
        
        if(pequeno === true){
        somar = somar * 15;
    }   if(medio === true){
        somar = somar * 20;
    }   if(grande === true){
        somar = somar * 25;
    }
    if(cupom === 'DESC10'){
            somar = somar - 10;
        }if(cupom === 'MET50'){
            somar = somar / 2
        }
    if(meiaentrada === true){
             somar = somar / 2;
        }
        setTotal(somar);    
    }



    return(
        <div className='pag-extra'>
            <Cabecalho titulo="Pagamento por unidade"/>
            <h1>Pagamento por unidade</h1>

                <div className='labels'>
                <h1>tamanho</h1>
                <label><input type="radio" name='tamanho' value='pequeno' onClick={() => { setPequeno(true); setMédio(false); setGrande(false); }} />pequeno</label>
                <label><input type="radio" name='tamanho' value='médio' onClick={() => { setPequeno(false); setMédio(true); setGrande(false); }} />médio</label>
                <label><input type="radio" name='tamanho' value='grande' onClick={() => { setPequeno(false); setMédio(false); setGrande(true); }} />grande</label>
                </div>

                    <div className='Quantidades'>
    
                    <h1>quantidade:</h1>
                    <input type="number" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))}/>

                    </div>

                <label> <input type='radio'  value={meiaentrada} onChange={(e) => setMeiaentrada(e.target.checked)} />desconto</label>
                
                    <div className='parte_texto'>
    
                    <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)} />

                    </div> 

                    <h1>{total}</h1>

                    <button onClick={Cupom} >Calcular</button>
        </div>
    )
}