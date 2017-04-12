import React from 'react'
import {Route} from 'react-router'

//Route Components.
import App from './Container/App';
import PageNotFound404 from './Container/ErrorPage/PageNotFound404';

/**
 * Routes
 */
export default

<div>
    <Route path="/" component={App} />
    <Route path="*" component={PageNotFound404}/>
</div>
