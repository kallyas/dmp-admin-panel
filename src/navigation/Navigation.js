import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../features/home/Home';
import Login from '../features/login/Login';
import Dashboard from '../features/dashboard/Dashboard';

export const Navigation = () => {
return (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
    </Router>
    )
};


