export default function fetchItineraries(url) {
  return dispatch => {
    dispatch(fetchItinerariesRequest());

    fetch(url)
      .then(resp => resp.json())
      .then(res => {
        return dispatch(fetchItinerariesSuccess(res));
      })
      .catch(err => dispatch(fetchItinerariesError(err)));
  };
}

const fetchItinerariesSuccess = itins => ({
  type: "FETCH_ITINERARIES_SUCCESS",
  payload: itins
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
