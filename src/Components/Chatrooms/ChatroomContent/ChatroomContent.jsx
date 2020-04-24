import React, { Component } from 'react'
import './ChatroomContent.css'
import {withRouter} from 'react-router-dom'
export class ChatroomContent extends Component {

    componentDidMount(){
        //get current room info
        const currentRoomId = this.props.match.params.id
        fetch(``)
    }


    render() {
        return (
            <div>
                <h5>Welcome to the chatroom</h5>
            </div>
        )
    }
}

export default withRouter(ChatroomContent)
