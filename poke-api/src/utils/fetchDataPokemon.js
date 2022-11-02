import axios from 'axios';

function fetchDataPokemon(offset){
    try{
        const responseAPI = axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`);
        return responseAPI;
    }
    catch{
        throw Error('Error Fetch API')
    }
}

export default fetchDataPokemon