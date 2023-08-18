import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App.js';
import { ContextProvider } from './Contexts/ContextProvider';


ReactDOM.render(
    <ContextProvider>
    <App />
    </ContextProvider>,
 document.getElementById('root')
 );   