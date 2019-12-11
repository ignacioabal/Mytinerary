const initialState = {
  itins: [],
  loading: false,
  error: null
};

const itineraryReducer = (state = initialState, action) => {
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
        itins: action.payload
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

export default itineraryReducer;
