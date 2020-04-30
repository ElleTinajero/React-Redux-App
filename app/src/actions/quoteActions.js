export const fetchQuote = () => {
    // ASYNC OPERATIONS
    return dispatch => {
        //thunk recognizes that this is not an action
        dispatch({ type: 'FETCH_QUOTE_START'})
    }
}