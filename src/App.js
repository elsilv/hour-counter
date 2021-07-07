import React from 'react';
import { Header } from './components/Header';
import { TimeSpend } from './components/TimeSpend.js';
import { HoursUsedLeft } from './components/HoursUsedLeft';
import { History } from './components/History';
import { AddHours } from './components/AddHours';

import './App.css';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <TimeSpend />
                <HoursUsedLeft />
                <History />
                <AddHours />
            </div>
        </div>
    )
}

export default App;