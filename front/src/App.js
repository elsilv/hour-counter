import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { TimeSpend } from './components/TimeSpend.js';
import { HoursUsedLeft } from './components/HoursUsedLeft';
import { History } from './components/History';
import { AddHours } from './components/AddHours';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Projects } from './components/Projects';

import { Private } from './components/Private';
import PrivateRoute from './components/PrivateRoute';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {

    return (
        <GlobalProvider>
            <Router>
                <PrivateRoute exact path="/" component={Private}/>
                <Navbar />
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path="/main">
                        <Header />
                        <div className="container">
                            <TimeSpend />
                            <HoursUsedLeft />
                            <History />
                            <AddHours />
                        </div>
                    </Route>
                </Switch>
            </Router>

           
        </GlobalProvider>
    )
}

export default App;