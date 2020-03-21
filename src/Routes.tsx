import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { APP_NAME, ROUTES } from './constants';
import AboutMePage from './pages/AboutMePage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

const Routes = () => {
    return (
        <Router>
            <Header appName={ APP_NAME }/>
            <Switch>
                <Route exact path={ ROUTES.HOME } component={ HomePage }/>
                <Route path={ ROUTES.ABOUT_ME } component={ AboutMePage }/>
                <Route path={ ROUTES.ARTICLE } component={ ArticlePage }/>
            </Switch>
        </Router>
    );
};

export default Routes;
