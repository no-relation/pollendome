import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    state = {
            today: new Date(),
            activeItem: 'home'
    }

    formatMonthDayYear = (date) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const month = months[date.getMonth()]
        const numDay = date.getDate()
        const year = date.getFullYear()

        return month + ' ' + numDay + ', ' + year
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLogout = (e) => {
        this.props.logout()
    }

    userLoggedIn = () => {
        const { activeItem } = this.state

        if (Object.keys(this.props.currentUser).length === 0 || this.props.currentUser["error"]) {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/signup' 
                    name='signup' 
                    active={activeItem === 'signup'} 
                    onClick={this.handleItemClick}>
                        Sign Up
                    </Menu.Item>
                    <Menu.Item as={Link} to='/login' 
                    name='login' 
                    active={activeItem === 'login'} 
                    onClick={this.handleItemClick}>
                        Login
                    </Menu.Item>
                    </Menu.Menu >
            )
        } else {
            return (
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to={`/user/${this.props.currentUser.id}`}
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick} >
                        Profile
                    </Menu.Item>
                    <Menu.Item as={Link} to='/'
                        name="logout"
                        onClick={this.handleLogout}
                        active={activeItem === 'logout'} >
                        Logout
                    </Menu.Item>
                </Menu.Menu >
            )
        }
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted>
                <Menu.Item as={Link} to='/' 
                name='home' active={activeItem === 'home'} 
                onClick={this.handleItemClick}>
                    <strong>
                        WELCOME TO<br />
                        POLLENDOME
                    </strong>
                </Menu.Item>
                <Menu.Item as={Link} to='/future' name='forecast' active={activeItem === 'forecast'} 
                onClick={this.handleItemClick}>
                    Forecast
                </Menu.Item>
                <Menu.Item as={Link} to='/past' 
                name='days' active={activeItem === 'days'} 
                onClick={this.handleItemClick}>
                    Past Data
                </Menu.Item>
                <Menu.Item 
                name='today' active={activeItem === 'today'} 
                onClick={this.handleItemClick}>
                    {this.formatMonthDayYear(this.state.today)}
                </Menu.Item>
                {this.userLoggedIn()}
            </Menu>
        )
    }
}
