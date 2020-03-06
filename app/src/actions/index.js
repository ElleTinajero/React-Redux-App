import axios from 'axios';

export const FETCH_JOKES = 'FETCH_JOKES';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const GET_ERROR = 'GET_ERROR';

export const getJoke = () => dispatch => {
    dispatch({ type: FETCH_JOKES });
    axios 
        .get('https://icanhazdadjoke.com/')
        .then(res => {
            dispatch({ type: UPDATE_JOKES, payload: res.data.joke})
        })
        .catch(err => {
            console.log("There was an error", err);
            dispatch({ type: GET_ERROR, payload: "There was an error"})
        });
};