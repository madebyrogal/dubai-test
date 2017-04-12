import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../../Reducer';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'

//Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const routingMiddleware = routerMiddleware(browserHistory);
/**
 * Store configuration.
 */
const ConfigureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, routingMiddleware))
);

export default ConfigureStore;
