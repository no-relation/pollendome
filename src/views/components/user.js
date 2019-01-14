import React, { Component } from "react";
import { connect } from 'react-redux'
import { Header, Container, Icon, Button } from 'semantic-ui-react'
import { UserForm } from "./userForm";
import { actions } from '../../state/actions';

class _User extends Component {

    state = {
        showEdit: false
    }

    dataOrEdit = () => {
        if (this.state.showEdit) {
            return <UserForm currentUser={this.props.currentUser} closeForm={() => this.setState({ showEdit: false })} editUser={this.props.editUser} />
            
        } else {
            return(
                <Container>
                    <Header as='h2' icon>
                        <Icon name='user circle' />
                        {this.props.currentUser.username}
                    </Header>
                    <br/>
                    <Header as='h4' icon>
                        <Icon name='mail' />
                        {this.props.currentUser.email}
                    </Header>
                    <br/>
                    <Button content='Edit' primary onClick={() => this.setState({ showEdit: true })} />
                </Container>
            )
        }
    }

    render() {
        return(
            this.dataOrEdit()
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export const User = connect(mapStateToProps, actions)(_User)