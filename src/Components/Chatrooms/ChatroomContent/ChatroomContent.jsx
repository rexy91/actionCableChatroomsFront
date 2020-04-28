import React, { Component } from 'react'
import './ChatroomContent.css'
import {withRouter} from 'react-router-dom'
import RoomWebSocket from '../RoomWebSocket/RoomWebSocket'
import {Form,Button} from 'react-bootstrap'
import {ActionCableConsumer} from 'react-actioncable-provider'

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

    getRoomData = () => {
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
            <div className='chatroomContent'>
                <h5>Welcome to the {this.state.currentRoom.name} chatroom</h5>
                <div className='chatContentContainer'>

                </div>
                <div className='newMessageBox'>
                <Form>
                    <Form.Group >
                    <Form.Control type="email" placeholder="type a message" />
                    </Form.Group>
                    <button>Send</button>
                </Form>
                <ActionCableConsumer channel = {{channel: 'RoomsChannel', room:'this is the room'}}  />
                </div>
                {/* <RoomWebSocket
                CableApp = {this.props.CableApp}
                currentRoom = {this.state.currentRoom}
                /> */}
            </div>
        )
    }
}

export default withRouter(ChatroomContent)
