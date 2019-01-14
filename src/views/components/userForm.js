import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { withRouter } from "react-router";
import history from '../../state/history';

class _UserForm extends Component {

    state = {
        username: this.props.currentUser.username,
        email: this.props.currentUser.email,
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        if (this.props.location.pathname === `/user/${this.props.match.params.id}`) {
            this.props.editUser({ ...this.state, id: this.props.currentUser.id })
            this.props.closeForm()
        }
        if (this.props.location.pathname === '/signup') {
            this.props.addUser(this.state)
            history.push('/')
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit} >
                <Form.Input 
                    name='username' 
                    value={this.state.username}
                    placeholder='username'
                    onChange = {this.handleOnChange} 
                />
                <Form.Input 
                    name='email' 
                    value={this.state.email}
                    placeholder='email'
                    onChange = {this.handleOnChange} 
                />
                <Form.Input 
                    name='password'
                    type='password' 
                    value={this.state.password}
                    placeholder='password'
                    onChange = {this.handleOnChange} 
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        );
    }
}

export const UserForm = withRouter(_UserForm)
