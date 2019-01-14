import React, { Component } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import { UserForm } from '../components/userForm';

export class Signup extends Component {
    render() {
        return (
            <Container>
                <Header as='h2' icon>
                    <Icon name='signup' />
                    Sign Up
                    <Header.Subheader>Over time, you can learn what pollens or molds you're allergic to</Header.Subheader>
                </Header>
                <UserForm currentUser={{username: '', email: ''}} />
            </Container>
        );
    }
}

// export default Signup;
