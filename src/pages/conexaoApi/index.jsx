import './index.css';
import { useState } from 'react';
import axios from 'axios'; 
import Cabecalho from '../../component/cabecalho';


export default function ChamadaApi(){
    const [cep, setcep] = useState('');
    const [endereco, setEndereco] = useState('');

    async function buscarCep() {
        let url = `https://viacep.com.br/ws/${cep}/json/`

        let resp = await axios.get(url);
        let dados = resp.data;
        let msg = dados.logradouro + " - " + dados.bairro + " - " + dados.localidade + " - " + dados.uf;

        setEndereco(msg);

    }


    return(
        <div className='pag_chaapi'>
            <Cabecalho titulo="Conexão com API"/>

            <div className='container'>
                <br />
            <input type="text" value={cep} onChange={(e) => setcep(e.target.value)} />
            <br />
            <button onClick={buscarCep}>buscar</button>
            <p>{endereco}</p>
            </div>

        </div>
    );

}



