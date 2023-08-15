import './index.scss';
import axios from 'axios'; 
import { useState } from 'react';

function Pokemon() {
  const[pokemons, setPokemons]=useState([])

async function buscarPokemons(){
  let url = 'https://pokeapi.co/api/v2/pokemon';

  let response = await axios.get(url)

  let listadepokemons=[];

  for(let item of response.data.results){
    let pokemonResp = await axios.get(item.url);

    let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

    let tipos = '';
    for(let t of pokemonResp.data.types){
      tipos = tipos + t.type.name + ',';
    }
    
    listadepokemons.push({
      nome: item.name,
      imagem: imagem,
      tipos: tipos
    })

    setPokemons(listadepokemons);


  }
}

const[cont, setCont] = useState(0)

async function Mais(){

  setCont(cont + 20)

  let url = 'https://pokeapi.co/api/v2/pokemon?offset='+ cont +'&limit=20';

  let response = await axios.get(url)

  let listadepokemons=[];

  for(let item of response.data.results){
    let pokemonResp = await axios.get(item.url);

    let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

    let tipos = '';
    for(let t of pokemonResp.data.types){
      tipos = tipos + t.type.name + ',';
    }
    
    listadepokemons.push({
      nome: item.name,
      imagem: imagem,
      tipos: tipos
    })

    setPokemons([...pokemons, ...listadepokemons]);


  }
}

  return (
    <div className="pokemon">
        <img src='/assets/image/logoPokedex 1.png'/>
        <h1>Pokémon</h1>
        <button onClick={buscarPokemons}>encontrar pokémons</button>

        <div className='lista'>
          {pokemons.map(item  =>
            <div className='card'>
              <div className='imagem'>
                <img src={item.imagem}/>
              </div>
              <b>{item.nome}</b>
              <p>{item.tipos}</p>
            </div>
          )}
        </div>

        <button className='b' onClick={Mais}>Buscar mais</button>
    </div>
  );
}

export default Pokemon;
