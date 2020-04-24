import React, { Component } from 'react'
import './Chatroomscontainer.css'
import Chatcontainer from '../Chatrooms/Chatcontainer/Chatcontainer'

export class Chatroomscontainer extends Component {
    render() {
        const {chatRooms} = this.props
        const chatRoomsMapper = chatRooms.map(chatRoom => {
            return (
                <Chatcontainer chatRoom={chatRoom}/>
            )
        })
        return (
            <div className='chatroomscontainer'>
                    <h5>All Rooms:</h5>
                    {/* Now render each room component with a loop  */}
                    {chatRoomsMapper}
            </div>
        )
    }
}

export default Chatroomscontainer
