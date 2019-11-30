export default function fetchItineraries() {
  // console.log("hola");

  return dispatch => {
    dispatch(fetchItinerariesRequest());

    const uri = "http://localhost:5000/cities";

    fetch(uri)
      .then(resp => resp.json())
      .then(res => {
        return dispatch(fetchItinerariesSuccess(res));
      })
      .catch(err => dispatch(fetchItinerariesError(err)));
  };
}

const fetchItinerariesSuccess = cities => ({
  type: "FETCH_ITINERARIES_SUCCESS",
  payload: cities
});

const fetchItinerariesRequest = () => ({
  type: "FETCH_ITINERARIES_REQUEST"
});

const fetchItinerariesError = error => ({
  type: "FETCH_ITINERARIES_FAILURE",
  payload: {
    error
  }
});
