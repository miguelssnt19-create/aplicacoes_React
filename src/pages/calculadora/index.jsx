import './index.css';
import { useState } from 'react';


export default function Calculador(){
    
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

        const [num1s, setNums1] = useState(0);
        const [num2s, setNums2] = useState(0);
        const [resultados, setResultados] = useState(0);

        const [num1x, setNumx1] = useState(0);
        const [num2x, setNumx2] = useState(0);
        const [resultadox, setResultadox] = useState(0);

                const [num1d, setNumd1] = useState(0);
                const [num2d, setNumd2] = useState(0);
                const [resultadod, setResultadod] = useState(0);

    function somar(){
        let soma = num1 + num2;
        setResultado(soma);
    }

    function subtrair(){
        let subtracao = num1s - num2s;
        setResultados(subtracao);
    }

    function multiplicar(){
        let multi = num1x * num2x;
        setResultadox(multi);
    }

    function divisao(){
        let div = num1d / num2d;
        setResultadod(div);
    }

    return(
        <div className='pag_calculador'>

            <h1>calculadora de soma</h1>

        <section className='parte-1'>
        
        <div className='separacao'>
        
        <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <span>+</span>

        <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />

        <span>=</span>

        <div>{resultado}</div>

        <button onClick={somar}>Calcular</button>
        </div>

        </section>

        <h1>calculadora de subtração</h1>

<section className='parte-2'>

    <div className='separacao-2'>

        <input type="number" value={num1s} onChange={(e) => setNums1(Number(e.target.value))} />

        <span>-</span>
        <input type="number" value={num2s} onChange={(e) => setNums2(Number(e.target.value))}
         />
        <span>=</span>

        <div>{resultados}</div>

        <button onClick={subtrair}>Calcular</button>
    </div>

</section>

        <h1>calculadora de multiplicação</h1>

<section className='parte-3'>

<div className='separacao-3'>

<input type="number" value={num1x} onChange={(e) => setNumx1(Number(e.target.value))} />

<span>X</span>

<input type="number" value={num2x} onChange={(e) => setNumx2(Number(e.target.value))} />

<span>=</span>

<div>{resultadox}</div>
<button onClick={multiplicar}>Calcular</button>
</div>

</section>

       <h1>calculadora de divisão</h1>

<section className='parte-4'>

    <div className='separacao-4'>

        <input type="number" value={num1d} onChange={(e) => setNumd1(Number(e.target.value))} />

        <span>/</span>

        <input type="number" value={num2d} onChange={(e) => setNumd2(Number(e.target.value))} />
        <span>=</span>

        <div>{resultadod}</div>

        <button onClick={divisao}>Calcular</button>

    </div>

</section>



        </div>
    )
}