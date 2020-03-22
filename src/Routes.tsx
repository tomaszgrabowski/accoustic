import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { APP_NAME, ROUTES } from './constants';
import AboutMePage from './pages/AboutMePage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

const Routes = () => {
    return (
        <main>
            <Router>
                <Header value={ APP_NAME } headerSize={ 1 } className={'text-center'}/>
                <Navigation/>
                <Switch>
                    <Route exact path={ ROUTES.HOME } component={ HomePage }/>
                    <Route path={ ROUTES.ABOUT_ME } component={ AboutMePage }/>
                    <Route path={ ROUTES.ARTICLE } component={ ArticlePage }/>
                </Switch>
            </Router>
        </main>
    );
};

export default Routes;
