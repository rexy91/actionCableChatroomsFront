import React, { Component } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
export class Signup extends Component {
    state = {
        username:'',
        password:''
    }

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handlesignup = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Accept: 'application/json'
            },
            body: JSON.stringify(
                {

                username,
                password}
                )
          })
            .then(r => r.json())
            .then(newUser => {
                console.log(newUser)
                this.props.history.push('/home')
            })
    }

    renderLogin = () =>{
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>  
                <div>
                  <h3 style={{textAlign:'center'}}>Register</h3>
                </div>
                  <Form onSubmit={this.handlesignup}>
                        <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' 
                               name='username'
                               value={this.state.username}
                               onChange = {this.handleOnchange}
                        />

                        </Form.Field>
                        <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' 
                               type='password'
                               name='password'
                               value={this.state.password}
                               onChange = {this.handleOnchange}
                        />
                        </Form.Field>
                        <Button type='submit'>Register</Button>
                    </Form>
            </div>
        )
    }
}

export default withRouter(Signup)
