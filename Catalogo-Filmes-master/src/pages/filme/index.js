
import { useState } from 'react';
import './index.scss';
import axios from 'axios';

function Filme() {
  const[filme, setFilme] = useState('')
  const[filmes, setFilmes] = useState([]) 
  const[filmes2, setFilmes2] = useState([]) 
  

  async function Buscarfilme(){
    let url = 'http://www.omdbapi.com/?apikey=37d7cf75&s=' + filme

    let r = await axios.get(url)
    console.log(r);
    setFilmes(r.data.Search)
  }

 



    const [cont, setCont] = useState(1);
  
  
 

  async function Proximo(){

    let x = cont + 1;
    setCont(x);


    let url = 'http://www.omdbapi.com/?apikey=37d7cf75&s=' + filme + '&page=' + x;

    let c = await axios.get(url)

    

    setFilmes(c.data.Search)
    
  }

  async function Vermais(){

    let p = cont + 1;
    setCont(p);
    
    let url = 'http://www.omdbapi.com/?apikey=37d7cf75&s=' + filme + '&page=' + p;

    let v = await axios.get(url)

    setFilmes([...filmes, ...v.data.Search]);
    
  }

  return (
    <div className="pagina-filme">
      <div className='cabe'>
        <img src='/assets/images/logo.png'/>
        <p>portifolio.me</p>
      </div>

      <section className='secao'>
        <div className='card'>
          <div className='topo'>
            <p>IMDB</p>
          </div>
          <b>Consulta de filmes</b>

          <div className='dv-input'>
            <h6>Nome</h6>
            <div className='input'>
              <input type='text' value={filme} onChange={e => setFilme(e.target.value)}/>
              <button className='lupa' onClick={Buscarfilme}>
                 <img src='/assets/images/icon-buscar.png'/>                
              </button>
            </div>
          </div>
            <div className='t'>

              <div className='cta' >
                  <p>Código</p>
                  <p>Título</p>
                  <p>Ano</p>
              
              </div>

              <div className='scroll'>
                {filmes.map(item =>

                  <div className='lista' >

                    <p>{item.imdbID}</p>
                    <p className='nome' title={item.Title}>{item.Title}</p>
                    <p>{item.Year}</p>
                    <div className='pt' >
                      <img className='banner' src={item.Poster}/>
                    </div>
                    

                  </div>

                  )}
                    {/* {filmes2.map(item =>

                      <div className='lista'>

                        <p>{item.imdbID}</p>
                        <p className='nome'>{item.Title}</p>
                        <p>{item.Year}</p>
                        <div className='pt' >
                          <img className='banner' src={item.Poster}/>
                        </div>
                        

                      </div>

                    )} */}
              </div>


              <div className='botao'>

                <button className='bbb' onClick={Vermais}> Ver Mais </button>

                <button className='bbb' onClick={Proximo}> Proximo </button>

              </div>
            
            </div>

          
                    
                
        </div>
      </section>
    </div>
  );
}

export default Filme;
