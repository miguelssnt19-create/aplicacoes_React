import './index.css';
import { useState } from 'react';


export default function Textos(){
 const [texto1, setTexto] = useState('eu amo jogos');

 function mudar(e){
    let valor = e.target.value;
    setTexto(valor);
 }

 const [cor,mudarcor] = useState('green');

 function mudarCor(e){
    let novacor = e.target.value;
    mudarcor(novacor);
 }

 const [texto2, setTexto2] = useState('eu amo programar');
 const [texto3, setTexto3] = useState('eu amo programar');
 


function mudar2(e){
    let valor = e.target.value;
    setTexto2(valor);
}

function trocar (){
    setTexto3(texto2) 
}



const [caixa, setCaixa] = useState('sim');
const [caixa2, setCaixa2] = useState('nao');

function botao(e){
    let novobotao = e.target.check;
    setCaixa(novobotao)
}

function botao2(e){
    if(e.target.checked){
        setCaixa2('sim')
    }
    else{
        setCaixa2('nao')
    }
}

    return(
    <div className='text_page' style={{ backgroundColor: cor }}>
        <h1>{texto1}</h1>
        <input type="text" value={texto1} onChange={mudar} />
        
        <div className='mudarbotao'>
            <h2>{texto3}</h2>
            <input type='text' onChange={mudar2} />
            <br/>
            <button  onClick={trocar}>alterar</button>
        </div>

        <br />
        
        <div className='mudarcor'>
        <input className='COR' type="color" onChange={mudarCor} />
        </div>
<div>
            <h1>{caixa2}</h1>
            <input type='checkbox'onChange={botao2} />
</div>

        <div>
            
            <a href="/">voltar</a>
        </div>

        <a href="/calculadora">calculadora</a>

    </div>


 )


}
