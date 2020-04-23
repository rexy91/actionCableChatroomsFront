import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Signup from './Components/Signup/Signup'
import './App.css';

function App() {
  return (
    <div className="App">
        <Link to ='/signup'>
          <Button>
              Signup
          </Button>
        </Link>
        <Button>
                Login
        </Button>
        




        
        <Switch>
          <Route path = '/signup' component = { Signup }/>
        </Switch>
    </div>
  );
}

export default App;
