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
import { Logout } from './components/Logout';

import { Projects } from './components/Projects';
import { ProjectList } from './components/ProjectList';
import { ProjectPage } from './components/ProjectPage';

import { Private } from './components/Private';
import PrivateRoute from './components/PrivateRoute';

import { GlobalProvider } from './context/GlobalState';
import { GlobalProvider2 } from './context/ProjectState';

import './App.css';

const App = () => {

    return (
        <> 
         <GlobalProvider>
        <Router>
            <Navbar />
            <Switch> 
            <Route exact path="/login" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/main">
                        <Header />
                        <Private />
                        <div className="container">
                            <TimeSpend />
                            <HoursUsedLeft />
                            <History />
                            <AddHours />
                        </div>
            </Route>

            <GlobalProvider2>
            <Route exact path="/projects">
                <Header /> 
                 <Projects />
                 <ProjectList />
            </Route> 
            <Route path="/projects/:id">
            <Header /> 
                <ProjectPage />
                
            </Route>
            </GlobalProvider2>
            <PrivateRoute exact path="/" component={Private}/>
            </Switch>
        </Router>
        </GlobalProvider>
        </>
    )
}

export default App;