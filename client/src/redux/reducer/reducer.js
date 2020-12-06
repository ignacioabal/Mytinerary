import { combineReducers } from "redux";
import citiesReducer from './cityReducer';
import itineraryReducer from './itinReducer';


const rootReducer = combineReducers({ 
    cityReducer: citiesReducer,
    itinReducer: itineraryReducer
});

export default rootReducer;
