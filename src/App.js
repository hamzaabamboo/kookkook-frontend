import './App.css';
import './assets/sass/theme.scss';

<<<<<<< Updated upstream
import React, { useReducer } from 'react';

import AppRouter from './Router.js';

const AppContext = React.createContext({});
=======
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import GetReport from './pages/get-report';
import Login from './pages/login';
import MainTabs from './pages/main';
import ManageChicken from './pages/manage-chicken';
import ManageFlock from './pages/manage-flock';
import Nav from './components/Navbar';
import React from 'react';
import ShowHouseData from './pages/show-house-data';
import Temp from './pages/temperature';
>>>>>>> Stashed changes

function App() {
    let initialState = { user: null, img: 'blue' };

    let reducer = (state, action) => {
        switch (action.type) {
            case 'change-user':
                return { ...state, user: action.payload };
            default:
                return { state };
        }
    };

    let [state, dispatch] = useReducer(reducer, initialState);
    let value = { state, dispatch };

    return (
<<<<<<< Updated upstream
        <AppContext.Provider value={value}>
            <AppRouter />
        </AppContext.Provider>
=======
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
                        <Route path="/show-house-data">
                            <ShowHouseData />
                        </Route>
                        <Route path="/get-report">
                            <GetReport />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
>>>>>>> Stashed changes
    );
}

export default App;
