import React, { Component } from 'react'
import './Login.css'


export class Login extends Component {
    render() {
        return (
            <div className = 'login'>
                    <div className='form'>
                        <label className='mt-10'>UserName</label>
                        <input className='mt-10'type="password" placeholder='password'/>
                    </div>
            </div>
        )
    }
}

export default Login
