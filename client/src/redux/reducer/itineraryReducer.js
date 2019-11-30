const initialState = {
  itineraries: [],
  loading: false,
  error: null
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITINERARIES_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_ITINERARIES_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        itineraries: action.payload
      };
    case "FETCH_ITINERARIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default cityReducer;
