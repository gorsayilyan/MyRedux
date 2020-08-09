import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from "./types"; 
import axios from "axios";

import { APIKey } from "../APIkey";

export const searchMovie = text => dispatch =>{
    dispatch({
        type: SEARCH_MOVIE,
        payload: text,
    })
}

export const fetchMovies = text => dispatch =>{
    axios
    .get("http://www.omdbapi.com/?i=tt3896198&apikey=" + APIKey + "&s=" + text)
    .then(response => {
        if(response.data.Search){
            dispatch({
                type:FETCH_MOVIES,
                payload: response.data.Search
            });
        }
    })
    .catch(err => console.log(err))
}


export const fetchMovie = id => dispatch =>{
    axios
    .get("http://www.omdbapi.com/?apikey=" + APIKey + "&i=" + id)
    .then( response => {
        // console.log(response)
        dispatch({
            type:FETCH_MOVIE,
            payload: response.data
        })
    })
    .catch(err => console.log(err))
}

export const setLoading = () =>{
    return{
        type: LOADING,
    }
}