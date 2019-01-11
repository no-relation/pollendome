import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    userLoggedIn = () =>{
        if (Object.keys(this.props.currentUser).length !== 0) {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to ={`/user/${this.props.currentUser.id}`} >
                        Profile
                    </Menu.Item>
                    <Menu.Item>
                        Logout
                    </Menu.Item>
                </Menu.Menu >
            )
        } else {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item>
                        Sign Up
                    </Menu.Item>
                    <Menu.Item>
                        Login
                    </Menu.Item>
                </Menu.Menu >
            )
}
    }

    render() {
        return (
            <Menu>
                <Menu.Item as={Link} to='/'>
                    WELCOME TO<br/>
                    POLLENDROME
                </Menu.Item>
                <Menu.Item>
                    Tomorrow's Forecast
                </Menu.Item>
                {this.userLoggedIn()}
            </Menu>
        )
    }
}
