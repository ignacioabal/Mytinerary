const initialState = {
    itineraries: [],
    loading: false,
    error: null
};

const itinReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITINS_REQUEST': return {
            ...state,
            loading: true
        };
        case 'FETCH_ITINS_SUCCESS': return {
            ...state,
            loading: false,
            error: null,
            itineraries:  action.payload
        };
        case 'FETCH_ITINS_ERROR': return {
            ...state,
            loading: false,
            error: action.payload.error
        };

        default:
            return state;
    }
} 

export default itinReducer;