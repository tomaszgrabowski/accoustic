import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import { APP_NAME, ROUTES } from './constants';

const Routes = () => {
    return (
        <Router>
            <Header appName={ APP_NAME }/>
            <Switch>
                <Route exact path={ ROUTES.HOME } component={ App }/>
                <Route path={ ROUTES.ABOUT_ME } component={ App }/>
                <Route path={ ROUTES.ARTICLE } component={ App }/>
            </Switch>
        </Router>
    );
};

export default Routes;
