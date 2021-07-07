import React from 'react';
import { Header } from './components/Header';
import { TimeSpend } from './components/TimeSpend.js';
import { HoursUsedLeft } from './components/HoursUsedLeft';
import { History } from './components/History';
import { AddHours } from './components/AddHours';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
    return (
        <GlobalProvider>
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