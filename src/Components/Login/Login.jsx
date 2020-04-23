import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Login.css'

export class Login extends Component {
    
    state={
        username:'',
        password:''
    }

    handleLogin = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value

        this.props.handleLoginOnAppJS(username,password)
        this.setState({
            username:'',
            password:''
        })
        this.props.history.push('/home')
    }   

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div className='loginForm'>
                <form onSubmit={this.handleLogin} >
                <h3>Please Login</h3>
                <label >Username</label>
                <input value={this.state.username} onChange={this.handleOnchange} className='ml-3' type="text" name='username' placeholder='username'/>
                <br/>
                <label >Password</label>
                <input value={this.state.password} onChange={this.handleOnchange} className='ml-3' type="password" name='password' placeholder='password'/>
                <br/>
                <button className='mt-3'type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)
