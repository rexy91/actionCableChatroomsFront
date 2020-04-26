import React ,{ Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import Navbar from './Components/Navbar/Navbar'
import Chatroomscontainer from './Components/Chatrooms/Chatroomscontainer'
import ChatroomContent from './Components/Chatrooms/ChatroomContent/ChatroomContent'
import './App.css';

export class App extends Component{
  state = {
    //Without using redux, we need local state to store the user object.
    currentUser: {},
    currentToken:'',
    chatRooms:[]
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
        
      // Fetch rooms
      fetch(`http://localhost:3000/rooms`)
      .then(res => res.json())
      .then(chatRooms => {
          this.setState({
            chatRooms
          })
      })
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
    console.log(this.props)
  return (
    <div className="App">
        <Navbar currentUser={this.state.currentUser}/>
        <Switch>
          <Route path = '/signup' component = { Signup }/>
          <Route path = '/rooms/:id' component = { ()=> 
          // Chatroomcontent component needs all these info 
          <ChatroomContent 
          chatRoom={this.state.currentChatRoom}
          CableApp={this.props.CableApp}
          currentUser={this.state.currentUser}
          />}/>
          <Route path = '/rooms' component = { ()=> <Chatroomscontainer chatRooms={this.state.chatRooms}/>}/>
          <Route path = '/login' component = { ()=> <Login handleLoginOnAppJS = {this.handleLoginOnAppJS} />}/>
          <Route path = '/:id/profile' component = { () => <Profile currentUser = {this.state.currentUser}/>}/>
        </Switch>
    </div>
  )
}
}

export default withRouter(App)
