import './index.scss';
import { useState } from 'react';


export default function Instagram() {

  const[usuario, setUsuario] = useState('')
  const[tempo, setTempo] = useState('')
  const[avatar, setAvatar] = useState('')
  const[descricao, setDescricao] = useState('')
  const[post, setPost] = useState('')
  const[curtidas, setCurtidas] = useState('')
  const[vetor, setVetor] = useState([])

  function CriarPost(){


  if(curtidas > 0 && usuario != '' && avatar != '' && post != ''){
    let p = {
      nome: usuario,
      tempo: tempo,
      foto: avatar,
      descrição: descricao,
      postagem:  post,
      curtidas: curtidas
    }

    setVetor([...vetor, p])
  }

  }



  return (
    <div className="pagina">
                <header>
                  <h6 className='h'><img src='/assets/image/logo.png'/> Portifolio.me</h6>
                  <h2> <img src='/assets/image/1.png'></img>Página Inicial</h2>
                  <h2> <img src='/assets/image/2.png'></img>Pesquisa</h2>
                  <h2> <img src='/assets/image/3.png'></img>Reels</h2>
                  <h2> <img src='/assets/image/4.png'></img>Mensagens</h2>
                  <h2> <img src='/assets/image/5.png'></img>Notificações</h2>
                  <h2> <img src='/assets/image/6.png'></img>Criar</h2>



                </header>

                <nav>
                    <div className='div'>Novas Publicações</div>
                    <h1>
                        <img src='/assets/image/11.png'></img>
                        <img src='/assets/image/12.png'></img>
                        <img src='/assets/image/13.png'></img>
                        <img src='/assets/image/14.png'></img>
                        <img src='/assets/image/15.png'></img>
                        <img src='/assets/image/16.png'></img>
                        <img src='/assets/image/17.png'></img>
                        <img src='/assets/image/18.png'></img>
                    </h1>

                    <section className='funcao'>
                      <div className='inputs'>
                        <p>Usuário: <input type='text' value={usuario} onChange={e => setUsuario(e.target.value)} /></p>

                        <p className='tempo'>Tempo: <input type='text' value={tempo} onChange={e => setTempo(e.target.value)}/></p>
                      </div>

                      <p className='ps'>Avatar: <input type='text' value={avatar} onChange={e => setAvatar(e.target.value)}/></p>

                      <p className='ps2'>Descrição: <textarea className='descricao' type='text' value={descricao} onChange={e => setDescricao(e.target.value)}/></p>

                      <div className='inputs2'>
                        <p>Post: <input type='text' value={post} onChange={e => setPost(e.target.value)}/></p>

                        <p>Curtidas: <input type='number' value={curtidas} onChange={e => setCurtidas(e.target.value)}/></p>
                      </div>

                      <button  onClick={CriarPost}>Postar</button>
                    </section>
                </nav>

          {vetor.map(item =>

            <section className='postagem'>
              <div className='card-post'>
                <div className='avatar'>
                  <img src={item.foto}/>
                  <h6>{item.nome}</h6>
                  <p>°{item.tempo}</p>
                </div>

                  <img  className='posta' src={item.postagem}/>

                <div className='imgs'>
                  <img src='/assets/image/i1.png'/>
                  <img src='/assets/image/i2.png'/>
                </div>

                <p> {item.curtidas}  curtidas</p>

                <div className='desc'>
                  <h6>{item.nome}</h6>
                  <p>{item.descrição}</p>
                </div>
              </div>
            </section>
          )}
    </div>

  );
}

