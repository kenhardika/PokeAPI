import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import TableNavigation from './TableNavigation';
import Tablepokedex from './Tablepokedex';
import fetchPokemon from './utils/fetchPokemon';
import fetchDataNavigatePokemon from './utils/fetchDataNavigatePokemon';
import fetchLinkPokemon from './utils/fetchLinkPokemon';


function App() {
  const [pokedex, setPokedex] = useState([]);
  const [navigateTable, setNavigateTable] = useState([]);
  const [offsetPage, setOffsetPage] = useState(0);
  const INITIAL_FETCH = 20;
  const fetchData = useCallback( async ()=>{
    let arrayData = [];
            try{
              const responseNavigate = await fetchDataNavigatePokemon(offsetPage); // for navigate purpose
              const responseBase = await fetchPokemon(offsetPage + INITIAL_FETCH); //base exp is base data for our table, id, name, base exp.
              setNavigateTable(responseNavigate.data);              
              responseBase.map((item)=>{
                return arrayData.push(item.data);
              });
                for(const data of arrayData){
                  const location = await fetchLinkPokemon(data.location_area_encounters);
                  data.location_area_encounters = location;
                  for(const ability of data.abilities){
                    const abils = await fetchLinkPokemon(ability.ability.url);
                    ability.ability.url = abils;
                  }
                }
              setPokedex(arrayData);
              return;
            }
            catch{
              throw Error('Error fetch');
            }
  }, [offsetPage, INITIAL_FETCH])

  const handleNextPage = (e) =>{
    e.preventDefault();
    if(navigateTable.next !== null){
      setOffsetPage((cur)=>cur+20);
      console.log('next 20');
      return
    }
    else return
  }
  const handlePrevPage = (e) =>{
    e.preventDefault();
    if(navigateTable.previous !== null){
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
