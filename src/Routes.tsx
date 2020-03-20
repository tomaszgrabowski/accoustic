import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import App from './App';
import { APP_NAME, ROUTES } from './constants';

const Routes = () => {
    return (
        <Router>
            <Navigation appName={APP_NAME}/>
            <Switch>
                <Route exact path={ROUTES.HOME} component={App}/>
                <Route path={ROUTES.ABOUT_ME} component={App}/>
                <Route path={ROUTES.ARTICLE} component={App}/>
            </Switch>
        </Router>
    );
};

export default Routes;
