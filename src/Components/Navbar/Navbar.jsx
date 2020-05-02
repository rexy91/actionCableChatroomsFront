import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li>
                              <Link className='nav-link' to ='/signup'>Signup</Link>
                        </li>
                        <li>
                             <Link className='nav-link' to ='/login'>Login</Link>
                        </li>
                        <li >
                            <Link className='nav-link' to={`/${this.props?.currentUser?.id}/profile`}>Profile</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to='/rooms'>Rooms</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar