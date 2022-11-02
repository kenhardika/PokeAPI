import axios from 'axios';

function fetchLocEncounter(link){
    try{
        const responseAPI = axios.get(link);
        // responseAPI.then((item)=>{
        //    return item
        // });
        return responseAPI
    }
    catch{
        throw Error('Error Fetch API')
    }
}

export default fetchLocEncounter