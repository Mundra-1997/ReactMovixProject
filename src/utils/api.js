import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmI4NTQ5MzFhYzNlYmU5ZDcwYjc0N2M3YzBiNjA0MSIsInN1YiI6IjYzZTY3OWJmZjQ4YjM0MDBhMDg5NjEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-MMuNykRAbfvzHLlweMYU55QU7jGpjicFbS4R9gmfE";

const headers = {
    Authorization : "bearer "+TMDB_TOKEN,
}

export const fetchDataFromApi = 
    async (url,params)=>{
        try{
            const {data} = await axios.get(BASE_URL+url,{
                headers,
            params           
         })
            return data;
        }
        catch(err){
           console.log(err);
           return err;
        }
    }
