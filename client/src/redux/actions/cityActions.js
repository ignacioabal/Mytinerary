export default function fetchCities() {
    // console.log("hola");
    
    return dispatch => {
        dispatch(fetchCitiesRequest());

        const uri = 'http://localhost:5000/cities';


        fetch(uri)
            .then(resp => resp.json())
            .then(res => {
                
                return dispatch(fetchCitiesSuccess(res))
            })
        .catch(err => dispatch(fetchCitiesError(err)))
    }
}


const fetchCitiesSuccess = cities => ({
    type: 'FETCH_CITIES_SUCCESS',
    payload: cities
});

const fetchCitiesRequest = () => ({
    type: 'FETCH_CITIES_REQUEST'
});

const fetchCitiesError = (error) => ({
    type: 'FETCH_CITIES_ERROR',
    payload: {
        error
    }
});