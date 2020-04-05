import './App.css';
import './assets/sass/theme.scss';

import React, { useReducer } from 'react';

import AppRouter from './Router.js';

const AppContext = React.createContext({});

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
        <AppContext.Provider value={value}>
            <AppRouter />
        </AppContext.Provider>
    );
}

export default App;
