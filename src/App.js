import './App.css';
import './assets/sass/theme.scss';

import AppRouter from './Router.js';
import Dashboard from '../src/components/Dashboard';
import React from 'react';
import Store from './Store';
import Zone from './components/Zone';

function App() {
    return (
        <Store>
            <AppRouter />
            <Dashboard />
            <Zone />
        </Store>
    );
}
export default App;
