import React, { Component } from "react";
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

class _User extends Component {
    render() {
        return(
            <Form>
                <Form.Field>
                    <label >{this.props.currentUser.username} </label>
                </Form.Field>
                <Form.Field>
                    <label >{this.props.currentUser.email} </label>
                </Form.Field>
                <Form.Button>Edit</Form.Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export const User = connect(mapStateToProps)(_User)