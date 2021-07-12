import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { TimeSpend } from './components/TimeSpend.js';
import { HoursUsedLeft } from './components/HoursUsedLeft';
import { History } from './components/History';
import { AddHours } from './components/AddHours';
import { Navbar } from './components/Navbar';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/'/>
                </Switch>
            </Router>

            <Header />
            <div className="container">
                <TimeSpend />
                <HoursUsedLeft />
                <History />
                <AddHours />
            </div>
        </GlobalProvider>
    )
}

export default App;