import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";

const rootReducer = combineReducers({
  cityReducer: citiesReducer,
  itineraryReducer: itineraryReducer
});

export default rootReducer;
