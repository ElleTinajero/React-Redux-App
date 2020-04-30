import axios from 'axios';

export const fetchQuote = () => {
    // ASYNC OPERATIONS
    return dispatch => {
        //thunk recognizes that this is not an action
        dispatch({ type: 'FETCH_QUOTE_START'})
        axios.get('https://api.kanye.rest/')
            .then(res => {
                dispatch({type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote })
            })
            .catch(err => console.log(err.response));
    };
};