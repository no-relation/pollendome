import React, { Component } from "react";
import { Form, Container, Icon, Header, Message } from 'semantic-ui-react'
import { user_actions } from '../../state/actions/user_actions';
import { connect } from 'react-redux';

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
    }

    errorBox() {
        let errorMessage = this.props.error
        if (errorMessage){
            return <Message negative 
                header="Unable to login"
                content={errorMessage} />
        }
    }

    render(){
        return (
            <Container>
                {this.errorBox()}
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

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    error: state.error
})

export const Login = connect(mapStateToProps, user_actions)(_Login)