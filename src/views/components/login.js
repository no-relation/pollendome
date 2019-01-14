import React, { Component } from "react";
import { Form } from 'semantic-ui-react'

export class Login extends Component {

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

        this.setState({ 
            email: '',
            password: ''
        })
    }

    render(){
        return (
            <Form>
                <Form.Input fluid 
                    name='email' 
                    label='Email' 
                    value={this.state.email} 
                    onChange = {this.handleOnChange} 
                />
                <Form.Input fluid 
                    name='password' 
                    label='Password' 
                    value={this.state.email} 
                    type='password' 
                    onChange={this.handleOnChange} 
                />
                    <Form.Button>Login</Form.Button>
            </Form>

        )
    }
}

