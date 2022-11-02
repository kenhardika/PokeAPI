import axios from 'axios';

function fetchPokemon(offset){
    try{
        let responseArray = [];
        const LIMITTABLE = 19;
        for(let i=(offset - LIMITTABLE) ; i<=offset; i++ ){
            const responseAPI = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            responseArray.push(responseAPI);
        }
        return Promise.all(responseArray)
    }
    catch{
        throw Error('Error Fetch API')
    }
}

export default fetchPokemon