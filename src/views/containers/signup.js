import React, { Component } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { UserForm } from '../components/userForm';
import { user_actions } from '../../state/actions/user_actions';

class _Signup extends Component {
    render() {
        return (
            <Container>
                <Header as='h2' icon>
                    <Icon name='signup' />
                    Sign Up
                    <Header.Subheader>Over time, you can learn what pollens or molds you're allergic to</Header.Subheader>
                </Header>
                <UserForm currentUser={{username: '', email: ''}} addUser={this.props.addUser} />
            </Container>
        );
    }
}


export const Signup = connect(null, user_actions)(_Signup);
