import React, { Component } from 'react'
import './Chatroomscontainer.css'
import {Row, Col, Container} from 'react-bootstrap'
import ChatroomInfo from '../Chatrooms/ChatroomInfo/ChatroomInfo'

export class Chatroomscontainer extends Component {
    render() {
        const {chatRooms} = this.props
        const chatRoomsMapper = chatRooms.map(chatRoom => {
            return (
                <Col>
                <ChatroomInfo chatRoom={chatRoom}/>
                </Col>
            )
        })
        return (
            <div className='chatroomscontainer'>
                    <h5>All Rooms:</h5>
                    {/* Now render each room component with a loop  */}
                    <Container>
                    <Row>
                        {chatRoomsMapper}
                    </Row>
                    </Container>
            </div>
        )
    }
}

export default Chatroomscontainer
