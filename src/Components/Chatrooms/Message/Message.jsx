import React, { Component } from 'react'
import '../Message/Message.css'

export class Message extends Component {
    render() {
        const {content} = this.props?.message
        const {username} = this.props.message.user
        return (
            <div className='singleMessage' style={{marginBottom:'10px'}}>
                <p style={{marginBottom:'3px'}}>{username}:</p>
                <p id='content' style={{marginTop:'-15px'}}>{content}</p>
            </div>
        )
    }
}

export default Message
