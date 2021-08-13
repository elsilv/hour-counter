import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
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

import { LandingPage } from './components/LandingPage';

import './App.css';

const App = () => {

    return (
        <> 
        <GlobalProvider>
            <Router>
                <Navbar />
                <Switch> 
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/logout">
                    <Header />
                    <Logout />
                </Route>
                <Route exact path="/register" component={Register}/>
                <GlobalProvider2>
                
                <Route exact path="/projects">
                    <Header /> 
                    <Projects />
                    <ProjectList />
                </Route> 
                <Route path="/projects/:id">
                <div className="container2">
                    <ProjectPage />
                </div>    
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