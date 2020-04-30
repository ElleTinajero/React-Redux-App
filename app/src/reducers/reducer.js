const initialState = {
    quote: '',
    isFetching: false,
    error:''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            case 'FETCH_QUOTE_START':
            return {
                ...state,
                isFetching: true
            };
            return state;
    }
}