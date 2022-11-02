import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import TableNavigation from './TableNavigation';
import Tablepokedex from './Tablepokedex';
import fetchBaseExpPokemon from './utils/fetchBaseExpPokemon';
import fetchDataPokemon from './utils/fetchDataPokemon';
import fetchLocEncounter from './utils/fetchLocEncounter';


function App() {
  const [pokedex, setPokedex] = useState([]);
  const [navigateTable, setNavigateTable] = useState([]);
  const [offsetPage, setOffsetPage] = useState(0);
  const INITIAL_FETCH = 20;
  const fetchData = useCallback( async ()=>{
    let arrayData = [];
            try{
              const responseNavigate = await fetchDataPokemon(offsetPage);
              const responseBase = await fetchBaseExpPokemon(offsetPage + INITIAL_FETCH);
              // const responseLoc = async (link) => await fetchLocEncounter(link);
              setNavigateTable(responseNavigate.data);              
              responseBase.map((item)=>{
                // console.log(item.data);
                return arrayData.push(item.data);
               
              });
              // console.log(arrayData);
              // arrayData.forEach((item)=>{
              //   const loc = fetchLocEncounter(item.location_area_encounters);
              //   item.location_area_encounters = loc;
              // });

                for(const data of arrayData){
                  const location = await fetchLocEncounter(data.location_area_encounters);
                  data.location_area_encounters = location;
                }

              // console.log(arrayData[0].location_area_encounters.then((item)=>{console.log(item)}));
              // const responseName = await fetchDataPokemon(offsetPage);
              // const responseLoc = await fetchLocEncounter(offsetPage + INITIAL_FETCH);
              // console.log(responseBase);
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

  console.log(navigateTable); 
  // console.log(pokedex);
  // console.log(arrayData);
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
