import { FETCH_JOKES } from '../actions/index';

const initialState = {
    joke:'',
    error:'',
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_JOKES:
            return {
                ...state, 
                isFetching: true,
                error:''
            };
        default: 
            return state;
    }
}

export default reducer;