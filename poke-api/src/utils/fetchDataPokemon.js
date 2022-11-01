import axios from 'axios';

function fetchDataPokemon(){
const url = '';
    axios.get(url)
    .then((data)=>{
        console.log(data);
        return data
    }).catch({})
}

export default fetchDataPokemon