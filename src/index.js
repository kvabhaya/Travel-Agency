import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter> {/* Wrap App with BrowserRouter */}
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
