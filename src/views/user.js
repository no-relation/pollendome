import React, { Component } from "react";
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

class _User extends Component {

    render() {

        return(
            <Form>
                <Form.Field>
                    <label>{this.props.user.username} </label>
                </Form.Field>
                <Form.Field>
                    <label>{this.props.user.email} </label>
                </Form.Field>
                <Form.Button>Edit</Form.Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
     user: { username: 'testname', email: 'test@example.com'}
})

export const User = connect(mapStateToProps)(_User)