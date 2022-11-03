import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import TableNavigation from './TableNavigation';
import Tablepokedex from './Tablepokedex';
import fetchLinkPokemon from './utils/fetchLinkPokemon';


function App() {
  const [pokedex, setPokedex] = useState({});
  const fetchData = useCallback( async (offsetPage)=>{
            try{
              const response = await fetchLinkPokemon(offsetPage); 
              setPokedex(response.data);              
              return;
            }
            catch{
              throw Error('Error fetch');
            }
  }, [])

  const handleNextPage = (e) =>{
    e.preventDefault();
    if(pokedex.next !== null){
      fetchData(pokedex.next);
      return
    }
    else return
  }
  const handlePrevPage = (e) =>{
    e.preventDefault();
    if(pokedex.previous !== null){
      fetchData(pokedex.previous);
      return
    }
    else return
  }

  useEffect(()=>{
   fetchData("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"); 
  }, [fetchData])

  return (
    <div className="App">
      {
        Object.keys(pokedex.results).length?
        <Tablepokedex data = {pokedex.results}/> :
        <p>Loading</p> 
      }
      <TableNavigation handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
    </div>
  );
}

export default App;
