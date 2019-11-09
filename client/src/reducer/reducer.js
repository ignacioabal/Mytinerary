const initialState = { city: 'Barcelona' };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MOSTRAR': return {
            ...state,
            city: action.payload
        }
        default:
            return state;
    }
} 