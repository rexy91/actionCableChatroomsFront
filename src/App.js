import React ,{ Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import LoginSignupSelection from './Components//LoginSignupSelection/LoginSignupSelection'
import Navbar from './Components/Navbar/Navbar'
import './App.css';

export class App extends Component{
  state = {
    //Without using redux, we need local state to store the user object.
    currentUser: {},
    currentToken:''

  }
  componentDidMount(){
        if (localStorage.getItem('token')){
          let token = localStorage.getItem('token')
          fetch(`http://localhost:3000/persist`,{
          headers: {
          "Authorization": `bearer ${token}`
        }
          })
          .then(res => res.json())
          .then(resp => {
            this.setState({
              currentUser:resp.user,
              currentToken:resp.token
            })
          })
        }
  }

  handleLoginOnAppJS = (username,password) =>{
    fetch(`http://localhost:3000/login`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body:JSON.stringify({
          username,
          password
      })
  })
  .then(res => res.json())
  .then(resp => {
    if(!resp.error){
    localStorage.setItem("token", resp.token)
      this.setState({
        currentUser:resp.user,
        currentToken:resp.token 
      })
      this.props.history.push(`/${resp.user.id}/profile`)
  }else{
    alert('invalid username or password')
  }
  })}

  render(){
  return (
    <div className="App">
        <Navbar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = { LoginSignupSelection }/>
          <Route path = '/signup' component = { Signup }/>
          <Route path = '/login' component = { ()=> <Login handleLoginOnAppJS = {this.handleLoginOnAppJS} />}/>
          <Route path = '/:id/profile' component = { () => <Profile currentUser = {this.state.currentUser}/>}/>
        </Switch>
    </div>
  )
}
}

export default withRouter(App)
