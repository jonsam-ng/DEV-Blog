/**
 * @Author wuqingshan
 * @Description 根路由入口
 * @Compatibility 
 * @Date 2020-08-25 18:10:39 Tuesday
 */
import React, {lazy} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import routerMap from './routerMap';
const Result404 = lazy(() => import('../components/common/404/result404'));
const Header = lazy(() => import('../components/header'));

const mapRouters = (routerMap:any) => {
    return routerMap.map((item: any, index: number) => (
        <Route 
            {...item}
            key={index}
        />
    ))
}

const Routers = () => (
    <Router>
        <Header />
        <div className="App_Body">
          <div className="CenterAxios">
            <Switch>
                <Redirect from='/' to='/home' exact></Redirect>
                {mapRouters(routerMap)}
                <Route component={Result404} />
            </Switch>
          </div>
        </div>
    </Router>
);


export default Routers;