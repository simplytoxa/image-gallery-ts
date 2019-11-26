import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Login from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashborad';

const App = () => (
    <Router>
        <CssBaseline />
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
);

export default App;
