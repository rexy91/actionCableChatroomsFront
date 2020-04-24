import React, { Component } from 'react'

export class ChatroomInfo extends Component {
    render() {
        const {chatRoom} = this.props
        return (
            <div>
                <h4>{chatRoom.name}</h4>
                <p>{chatRoom.description}</p>
            </div>
        )
    }
}

export default ChatroomInfo
