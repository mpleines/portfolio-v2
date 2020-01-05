import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Google Analytics
import ReactGA from 'react-ga';
const trackingId = 'UA-146888592-1'; 
ReactGA.initialize(trackingId);

ReactDOM.render(<App />, document.getElementById('root'));
