import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {

    state = {}

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
                <Menu.Menu position='right'>
                    <Menu.Item>
                        Profile
                    </Menu.Item>
                    <Menu.Item>
                        Logout
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
