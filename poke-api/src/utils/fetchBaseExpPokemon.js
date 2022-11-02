import axios from 'axios';

function fetchBaseExpPokemon(offset){
    try{
        let responseArray = [];
        const LIMITTABLE = 19;
        for(let i=(offset - LIMITTABLE) ; i<=offset; i++ ){
            const responseAPI = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            responseArray.push(responseAPI);
        }
        // Promise.all(responseArray).then((item)=>{
        //     console.log(item)
        //     // responseArray = responseArray.push(item);
        // })
        // console.log(responseArray)
        // console.log(responseArray)
        return Promise.all(responseArray)
    }
    catch{
        throw Error('Error Fetch API')
    }
}

export default fetchBaseExpPokemon