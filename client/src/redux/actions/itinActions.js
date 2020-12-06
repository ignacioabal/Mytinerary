export default function fetchItineraries(city) {

    return dispatch => {
        dispatch(fetchItinsRequest());

        const uri = `http://localhost:5000/cities/${city}`;


        fetch(uri)
            .then(resp => resp.json())
            .then(res => {
                
                return dispatch(fetchItinsSuccess(res))
            })
        .catch(err => dispatch(fetchItinsError(err)))
    }
}


const fetchItinsSuccess = itineraries => ({
    type: 'FETCH_ITINS_SUCCESS',
    payload: itineraries
});

const fetchItinsRequest = () => ({
    type: 'FETCH_ITINS_REQUEST'
});

const fetchItinsError = (error) => ({
    type: 'FETCH_ITINS_ERROR',
    payload: {
        error
    }
});