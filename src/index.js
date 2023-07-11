import React from 'react';
import ReactDOM from 'react-dom/client';
import Airbnb from './Airbnb';
import './index.css';

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Airbnb/>
    </React.StrictMode>
);