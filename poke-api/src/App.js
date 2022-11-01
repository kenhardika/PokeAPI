import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import TableNavigation from './TableNavigation';
import Tablepokedex from './Tablepokedex';
import fetchDataPokemon from './utils/fetchDataPokemon';


function App() {
  const [pokedex, setPokedex] = useState({});
  const [offsetPage, setOffsetPage] = useState(0);
  const fetchData = useCallback( async ()=>{
            try{
              const response = await fetchDataPokemon(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offsetPage}`);
              setPokedex(response.data);
              return response.data;
            }
            catch{
              throw Error('Error fetch');
            }
  }, [offsetPage])

  const handleNextPage = (e) =>{
    e.preventDefault();
    if(pokedex.next !== null){
      setOffsetPage((cur)=>cur+20);
      console.log('next 20');
      return
    }
    else return
  }
  const handlePrevPage = (e) =>{
    e.preventDefault();
    if(pokedex.prev !== null){
      setOffsetPage((cur)=>cur-20);
      console.log('prev 20');
      return
    }
    else return
  }

  useEffect(()=>{
   fetchData(); 
  }, [fetchData])


  // console.log(pokedex);
  return (
    <div className="App">
      {
        Object.keys(pokedex).length?
        <Tablepokedex data = {pokedex}/> :
        <p>Loadnig</p> 
      }
      <TableNavigation handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
    </div>
  );
}

export default App;
