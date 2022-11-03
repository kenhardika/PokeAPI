import axios from 'axios';

function fetchLinkPokemon(link){
    try{
        const responseAPI = axios.get(link);
        return responseAPI
    }
    catch{
        throw Error('Error Fetch API')
    }
}

export default fetchLinkPokemon