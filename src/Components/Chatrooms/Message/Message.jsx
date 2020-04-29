import React, { Component } from 'react'
import '../Message/Message.css'

export class Message extends Component {
    render() {
        console.log(this.props.message)
        return (
            <div className='singleMessage'>
                {this.props.message.content}
            </div>
        )
    }
}

export default Message
