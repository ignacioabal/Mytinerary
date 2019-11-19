const initialState = {
    cities: [],
    loading: false,
    error: null
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITIES_REQUEST': return {
            ...state,
            loading: true
        };
        case 'FETCH_CITIES_SUCCESS': return {
            ...state,
            loading: false,
            error: null,
            cities:  action.payload
        };
        case 'FETCH_CITIES_FAILURE': return {
            ...state,
            loading: false,
            error: action.payload.error
        };

        default:
            return state;
    }
} 

export default cityReducer;