import { combineReducers } from "redux";
import citiesReducer from './cityReducer';

const rootReducer = combineReducers({ 
    cityReducer: citiesReducer 
});

export default rootReducer;