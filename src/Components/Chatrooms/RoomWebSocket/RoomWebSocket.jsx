import React, { Component } from 'react'

export class RoomWebSocket extends Component {

    componentDidMount(){
        this.props.CableApp.room = this.props.CableApp.cable.subscriptions.create({
            channel: 'RoomsChannel',
            room: this.props.currentRoom.id
        }
        )
    }

    render() {
        
        return (
            <div>
                
            </div>
        )
    }
}

export default RoomWebSocket
