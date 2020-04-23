import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class LoginSignupSelection extends Component {
    render() {
        return (
            <div>
                <Link to ='/signup'>
                        <Button>Signup</Button>
                </Link>
                <Link to ='/login'>
                        <Button>Login</Button>
                </Link>
            </div>
        )
    }
}

export default LoginSignupSelection
