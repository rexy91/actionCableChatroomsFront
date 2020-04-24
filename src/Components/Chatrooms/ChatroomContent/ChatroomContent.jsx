import React, { Component } from 'react'
import './ChatroomContent.css'
import {withRouter} from 'react-router-dom'
export class ChatroomContent extends Component {
    state={
        currentRoom:{}
    }
    componentDidMount(){
        //get current room info
        const currentRoomId = this.props.match.params.id
        fetch(`http://localhost:3000/rooms/${currentRoomId}`)
        .then(res => res.json())
        .then(currentRoom => {
                this.setState({
                    currentRoom
                })
        })
    }

    render() {
        return (
            <div>
                <h5>Welcome to the {this.state.currentRoom.name} chatroom</h5>
            </div>
        )
    }
}

export default withRouter(ChatroomContent)
