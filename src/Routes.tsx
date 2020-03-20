import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import { ROUTES } from './constants';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME} component={App}/>
                <Route path={ROUTES.ABOUT_ME} component={App}/>
                <Route path={ROUTES.ARTICLE} component={App}/>
            </Switch>
        </Router>
    );
};

export default Routes;
