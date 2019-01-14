import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    formatMonthDayYear = (date) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const month = months[this.state.date.getMonth()]
        const numDay = this.state.date.getDate()
        const year = this.state.date.getFullYear()

        return month + ' ' + numDay + ', ' + year
    }

    handleClick = (e) => {
        this.props.logout()
    }

    userLoggedIn = () => {
        if (Object.keys(this.props.currentUser).length !== 0) {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to ={`/user/${this.props.currentUser.id}`} >
                        Profile
                    </Menu.Item>
                    <Menu.Item as={Link} to='/'
                        name="logout"
                        onClick={this.handleClick} >
                        Logout
                    </Menu.Item>
                </Menu.Menu >
            )
        } else {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/signup' >
                        Sign Up
                    </Menu.Item>
                    <Menu.Item as={Link} to='/login' >
                        Login
                    </Menu.Item>
                </Menu.Menu >
            )
}
    }

    render() {
        return (
            <Menu inverted>
                <Menu.Item as={Link} to='/'>
                    <strong>
                        WELCOME TO<br />
                        POLLENDROME
                    </strong>
                </Menu.Item>
                <Menu.Item>
                    Tomorrow's Forecast
                </Menu.Item>
                <Menu.Item>
                    {this.formatMonthDayYear(this.state.date)}
                </Menu.Item>
                {this.userLoggedIn()}
            </Menu>
        )
    }
}
