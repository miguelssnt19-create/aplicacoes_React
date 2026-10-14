import './index.css';
import { useState } from 'react';
import Cabecalho from '../../component/cabecalho';

export default function Contador(){
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');


    const [numero, setNumero] = useState(0);
    
    function contador(){

        setNumero(numero + 1);
    }

    function subtracao(){
        setNumero(numero - 1);
    }
    
    function dobro(){
        setNumero(numero * 2)
    }

    function zerar(){
        setNumero(0)
    }

    function somar(){
        let soma = numero1 + numero2;
        setNumero(soma);
    }

    return(
        <div className='tudoC'>

            <Cabecalho titulo="Contador" />

            <h1>Contador : {numero}</h1>
                <button className='botao1' onClick={contador}>Aumentar</button>
                <br/>
                <button className='botao2' onClick={subtracao}>diminuir</button>
                <br/>
                <button className='botao3' onClick={dobro}>dobrar</button>
                <br/>
                <button className='botao4' onClick={zerar}>zerar</button>

                <br/>
                <input type="text" placeholder="Número 1" value={numero1} onChange={(e) => setNumero1(Number(e.target.value))} />
                <br/>
                <input type="text" placeholder="Número 2" value={numero2} onChange={(e) => setNumero2(Number(e.target.value))} />
                <br/>
                <button className='botao5' onClick={somar}>Somar</button>
                

            <br />


        </div>


    );
}