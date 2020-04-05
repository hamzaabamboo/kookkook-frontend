import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import ChickenInfo from './pages/chicken-info';
import CreateAccount from './pages/create-account';
import Login from './pages/login';
import MainTabs from './pages/main';
import ManageChicken from './pages/manage-chicken';
import ManageFlock from './pages/manage-flock';
import Nav from './components/Navbar';
import PersonalInfo from './pages/create-account/PersonalInfo';
import React from 'react';
import Temp from './pages/temperature';

function appRouter() {
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
                        <Route path="/zone">
                            <MainTabs />
                        </Route>
                        <Route path="/dead-chicken">
                            <MainTabs />
                        </Route>
                        <Route path="/daily-data">
                            <MainTabs />
                        </Route>
                        <Route path="/manage-chicken">
                            <ManageChicken />
                        </Route>
                        <Route path="/manage-flock">
                            <ManageFlock />
                        </Route>
                        <Route path="/create-account">
                            <CreateAccount />
                        </Route>
                        <Route path="/chicken-info">
                            <ChickenInfo />
                        </Route>
                        <Route path="/personal-info">
                            <PersonalInfo />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default appRouter;
