import React from 'react';
import Login from './pages/login';
import './App.css';
import './assets/sass/theme.scss';
import Nav from './components/Navbar';
import MainTabs from './pages/main';
import Temp from './pages/temperature';
import ManageChicken from './pages/manage-chicken';
import ManageFlock from './pages/manage-flock';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div id="outer-container">
            <Router>
                <Nav />
                <div id="page-wrap">
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/temp">
                            <Temp />
                        </Route>
                        <Route path="/main">
                            <MainTabs />
                        </Route>
                        <Route path="/manage-chicken">
                            <ManageChicken />
                        </Route>
                        <Route path="/manage-flock">
                            <ManageFlock />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
