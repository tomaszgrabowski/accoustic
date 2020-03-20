import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import { HOME } from './constants';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={HOME} component={App}/>
            </Switch>
        </Router>
    );
};

export default Routes;
