import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import actionCable from 'actioncable'

// const CableApp = {}

// CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(
  <Router>
  <React.StrictMode>
    {/* <App CableApp={CableApp}/> */}
    <App/>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

