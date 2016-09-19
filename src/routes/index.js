import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import {Home} from '../components/Home';
import {UsersContainer} from '../components/Users';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/users" component={UsersContainer}></Route>
    </Route>
);