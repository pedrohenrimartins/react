import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';


export default function Sorvete(){


    const[sorvete, setSorvete] = useState('')
    const[sorvetes, setSorvetes] = useState([])
    const[valor, setValor] = useState(0)
    const[total, setTotal] = useState(0)


function oi(){

  if(valor > 0 && sorvete != ''){
    let p = {
      sorvete: sorvete,
      valor: valor
    }
  
    setSorvetes([...sorvetes, p])
  
   
  
    setTotal(total + Number(valor));


  }

}



  

return(
  <div>
    <Cabecalho/>
    <div className='pagina-tarefas'>

      
      <div className='container'>
        <div className='image'>
          <p>Sorveteria</p>
        </div>
        <p>Novo item </p>
        <div className='inputs'>
            <div>
                <input type='text' value={sorvete} onChange={e => setSorvete(e.target.value)}/>
            </div> 
            <div className='i2'>

                  <input type='number' value={valor}  onChange={e => setValor(e.target.value)}/>
            </div>
            <button onClick={oi}> Adicionar </button>
          </div>  
        <div>
          <div className='text'>
            <h6>Lista de compra</h6>
            <h5>Valor Total: {total.toFixed(2)}</h5>
          </div>
          {sorvetes.map(item =>
             <div className='lista'>
                <p>{item.sorvete}</p>
                <p>{item.valor}</p>
             </div>
          )}

        </div>
      </div>

      <Link className='voltar' to='/'> Voltar para Menu </Link>
    </div>
  </div>
    
    )
}