/* <>_()^ */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import ConfigureStore from './Module/Store/ConfigureStore';
import routes from './routes';

//Store, history initialization.
const store = ConfigureStore();
const history = syncHistoryWithStore(browserHistory, store);

/**
 * Render
 */
render(
        <Provider store={store}>
            <Router history={history} routes={routes}/>
        </Provider>,
        document.getElementById('root')
        );
