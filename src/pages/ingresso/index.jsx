import './index.css';
import { useState } from 'react';
import Cabecalho from '../../component/cabecalho';


export default function Ingresso(){
    const[meiaEntrada, setMeiaEntrada] = useState(false);
    const [quantidade, setQuantidade] = useState(1);
    const [cupom, setCupom] = useState('');
    const [total, setTotal] = useState('');
    const Valor_Ingresso = 30;



    let somar = quantidade * Valor_Ingresso;

    function meiaentrada (){

        if (meiaEntrada == true) {
            somar = somar / 2;
        } if(cupom == 'CUPOM10') {
            somar = somar - 10;
        }
        if(cupom =='CUPOM50'){
            somar = somar * 0.5;
        }

    setTotal(somar);
    }



    return(
            <div className='pag-ingre'>
                <Cabecalho titulo="Compre seu Ingresso aqui"/>

                <br />
            <input type="number" value={quantidade} min={0} onChange={(e) => setQuantidade(Number(e.target.value))}/>

            <div className='meias'>
                <input type="checkbox" value={meiaEntrada} onChange={(e) => setMeiaEntrada(e.target.checked)} /> <p>Meia Entrada</p>
            </div>


            <input type="text" value={cupom} onChange={(e) => setCupom(e.target.value)} />
            <br />
            <button onClick={meiaentrada}>Calcular</button>

            <h1>{total}</h1>

            </div>


    )
}


