import React, {lazy} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
const Home = lazy(() => import('../components/home'));
const Result404 = lazy(() => import('../components/common/404/result404'));

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route component={Result404} />
        </Switch>
    </HashRouter>
);


export default Router;