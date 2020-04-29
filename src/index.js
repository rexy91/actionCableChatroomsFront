import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ActionCableProvider} from 'react-actioncable-provider'
// import actionCable from 'actioncable'

// const CableApp = {}

// CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(
  <Router>
    {/* <App CableApp={CableApp}/> */}
    <ActionCableProvider url='ws://localhost:3000/cable'>
    <App/>
    </ActionCableProvider>
  </Router>,
  document.getElementById('root')
);

