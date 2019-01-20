import React, { Component } from "react";
import { connect } from 'react-redux'
import { Header, Container, Icon, Button } from 'semantic-ui-react'
import { UserForm } from "../components/userForm";
import { user_actions } from '../../state/actions/user_actions';
import { FeelingsContainer } from "./feelingsContainer";

class _User extends Component {

    state = {
        date: new Date(),
        showEdit: false
    }

    componentDidMount() {
        if(this.props.currentUser.id) {
            this.props.getFeelings(this.props.currentUser.id)
        }
    }

    dataOrEdit = () => {
        if (this.state.showEdit) {
            return <UserForm currentUser={this.props.currentUser} 
                closeForm={() => this.setState({ showEdit: false })} 
                editUser={this.props.editUser} />
            
        } else {
            return(
                <Container>
                    <Header as='h2' icon>
                        <Icon name='user circle' />
                        {this.props.currentUser.username}
                    </Header>
                    <br />
                    <FeelingsContainer feelings={this.props.feelings} date={this.state.date} />
                    <Header as='h4' icon>
                        <Icon name='mail' />
                        {this.props.currentUser.email}
                    </Header>
                    <br/>
                    <Button content='Edit' primary onClick={() => this.setState({ showEdit: true })} />
                    <Button content="Delete" color='red' onClick={() => this.props.deleteUser(this.props.currentUser.id)} />
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
    currentUser: state.currentUser,
    feelings: state.feelings
})

export const User = connect(mapStateToProps, user_actions)(_User)