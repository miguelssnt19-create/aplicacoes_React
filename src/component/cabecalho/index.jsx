import './index.scss'



export default function Cabecalho(props){

    return(
        <div className='comp-cabe'>

            <h1>{props.titulo ?? 'Título Padrão'}</h1>


            <a href="/">app</a>
            <a href="/contato">Contato</a>
            <a href="/evento">Evento</a>
            <a href="/contador">Contador</a>
            <a href="/descricao">Descrição</a>
            <a href="/textos">Textos</a>
            <a href="/calculadora">Calculadora</a>
            <a href="/cadastro">Cadastro</a>


        </div>

    )


}

