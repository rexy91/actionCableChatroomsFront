import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import './App.css';

function App() {
  return (
    <div className="App">
        <Link to ='/signup'>
          <Button>Signup</Button>
        </Link>
        <Link to ='/signup'>
          <Button>Signup</Button>
        </Link>
        
        <Switch>
          <Route path = '/signup' component = { Signup }/>
          <Route path = '/signup' component = { Login }/>
        </Switch>
    </div>
  );
}

export default App;
