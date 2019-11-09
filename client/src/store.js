import { createStore, combineReducers } from 'redux';
import cityReducer from './reducer/reducer';

const reducers = combineReducers({
    cityReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

