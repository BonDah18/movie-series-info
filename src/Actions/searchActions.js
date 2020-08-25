import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

import {APIKey} from '../APIKey'

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE, 
    payload: text
  })
};

export const fetchMovies = text => dispatch =>{
  axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
      .then(repsonse => dispatch ({
            type: FETCH_MOVIES, 
            payload: response.data
            })
           )
       .catch(err => coonsole.log(err));
};

export const fetchMovie = id => disptach => {
 axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${id}`)
      .then(repsonse => dispatch ({
            type: FETCH_MOVIE, 
            payload: response.data
            })
           )
       .catch(err => coonsole.log(err));
}; 

export const setLoading = () => {
  return { 
  type: Loading
  };
};