import React, {Component} from 'react'
import './Profile.css'


export class Profile extends Component{

    render(){
        return(
        <div className='profileDiv'>
            <h4>Welcome {this.props.currentUser.username}</h4>
        </div>
        )
    }
}

// So can be imported as Profile without {}
export default Profile