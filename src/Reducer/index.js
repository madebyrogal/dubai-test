import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
//import reducers
import Brokers from './Brokers/reducer';

/**
 * Combined reducers.
 */
const rootReducer = combineReducers({
    routing: routerReducer,
    brokers: Brokers,
});

export default rootReducer;
