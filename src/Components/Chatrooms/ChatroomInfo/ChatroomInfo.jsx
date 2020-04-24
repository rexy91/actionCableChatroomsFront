import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Link,Route,Switch} from 'react-router-dom'

import ChatroomContent from '../ChatroomContent/ChatroomContent'

export class ChatroomInfo extends Component {

    
    render() {
        const {chatRoom} = this.props

        return (
            <div>
                <h4>{chatRoom.name}</h4>
                <p>{chatRoom.description}</p>
                <Link to ={`/rooms/${chatRoom.id}`}>
                <Button>Enter Chat Room</Button>
                </Link>
            </div>
        )
    }
}

export default ChatroomInfo
