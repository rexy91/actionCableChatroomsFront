import React, { Component } from 'react'
import './ChatroomContent.css'
import {withRouter} from 'react-router-dom'
import RoomWebSocket from '../RoomWebSocket/RoomWebSocket'
import {Form,Button} from 'react-bootstrap'
import {ActionCableConsumer} from 'react-actioncable-provider'
import Message from '../Message/Message'

export class ChatroomContent extends Component {
    state={
        currentRoom:{},
        currentRoomMessages:[]
    }

    componentDidMount(){
        //get current room info
        const currentRoomId = this.props.match.params.id
        fetch(`http://localhost:3000/rooms/${currentRoomId}`)
        .then(res => res.json())
        .then(currentRoom => {
                this.setState({
                    currentRoom,
                    currentRoomMessages:currentRoom.room.messages 
                })
        })
    }

    // getRoomData = () => {
    //     const currentRoomId = this.props.match.params.id
    //     fetch(`http://localhost:3000/rooms/${currentRoomId}`)
    //     .then(res => res.json())
    //     .then(currentRoom => {
    //             console.log(currentRoom)
    //             this.setState({
    //                 currentRoom:{
    //                     id:currentRoom.id,
    //                     name:currentRoom.name,
    //                     messages:currentRoom.messages
    //                 }
    //             })
    //     })}

    newMessage = (e) => {
        e.preventDefault()
        const content = e.target.message.value
        fetch(`http://localhost:3000/messages`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json'
            },
            body:JSON.stringify({
                content,
                room_id: this.state.currentRoom.room.id,
                user_id: this.props.currentUser.id
            })
        })
        .then(res => res.json())
        .then(respond => {
            // this.setState({
            //     currentRoom:{
            //         id:{...this.state.currentRoom.room}
            //     }
            // })
        })
    }

    handleOnReceived = (broadcastInfoFrombackend) => {
        // here broadcastInfoFrombackend is the message object. 
        console.log('BraodcastedMessage', broadcastInfoFrombackend)
        const newMessage = broadcastInfoFrombackend
        // Make a fetch so we can get back the message obj, as the same obj type inside our current state 's message array.
        fetch(`http://localhost:3000/messages/${broadcastInfoFrombackend.id}`)
        .then(res => res.json())
        .then(newaddMessageObj => {
            this.setState({
                currentRoomMessages:[...this.state.currentRoomMessages, newaddMessageObj]
            })
        })
        console.log(this.state.currentRoomMessages)
    }

    render() {
        // console.log(this.state.currentRoom?.room?.id)
        const renderRoomMessages = this.state.currentRoomMessages?.map(message => {
                 return <Message  key={message.id} message={message}/>
        })
        return (
            <div className='chatroomContent'>
                <h5>Welcome to the {this.state.currentRoom?.room?.name} chatroom</h5>
                <div className='chatContentContainer'>
                    {renderRoomMessages}
                </div>
                <div className='newMessageBox'>
                <Form onSubmit = {this.newMessage}>
                    <Form.Group >
                    <Form.Control type="text" name='message' placeholder="type a message" />
                    </Form.Group>
                    <button>Send</button>
                </Form>
                <ActionCableConsumer 
                channel = {{channel: 'RoomsChannel', room:this.state.currentRoom?.room?.id}} onReceived = {this.handleOnReceived}  />
                </div>
            </div>
        )
    }
}

export default withRouter(ChatroomContent)
