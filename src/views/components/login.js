import React, { Component } from "react";
import { Form, Container, Icon, Header } from 'semantic-ui-react'
import { actions } from '../../state/actions';
import { connect } from 'react-redux';
import history from "../../state/history";

class _Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        history.push('/')
    }

    render(){
        return (
            <Container>
                <Header as='h2' icon>
                    <Icon name='sign-in' />
                    Log In
                    <Header.Subheader>How are you feeling today?</Header.Subheader>
                </Header>
                <Form onSubmit={this.handleOnSubmit} >
                    <Form.Input fluid 
                        name='email' 
                        label='Email' 
                        value={this.state.email} 
                        onChange = {this.handleOnChange} 
                        />
                    <Form.Input fluid 
                        name='password' 
                        label='Password' 
                        value={this.state.password} 
                        type='password' 
                        onChange={this.handleOnChange} 
                        />
                        <Form.Button>Login</Form.Button>
                </Form>
            </Container>
        )
    }
}

export const Login = connect(null, actions)(_Login)