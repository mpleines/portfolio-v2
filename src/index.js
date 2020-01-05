import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Google Analytics
import ReactGA from 'react-ga';
const trackingId = process.env.REACT_APP_googleAnalyticsId; 
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));
