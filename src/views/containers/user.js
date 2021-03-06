import React, { Component } from "react";
import { connect } from 'react-redux'
import { Header, Container, Icon, Button, Card } from 'semantic-ui-react'
import { UserForm } from "../components/userForm";
import { user_actions } from '../../state/actions/user_actions';
import { FeelingsContainer } from "./feelingsContainer";

class _User extends Component {

    state = {
        date: new Date(),
        showEdit: false
    }

    async componentDidMount() {
        if(this.props.currentUser.id) {
            await this.props.getFeelings(this.props.currentUser.id)
        }
    }

    dataOrEdit = () => {
        if (this.state.showEdit) {
            return <UserForm currentUser={this.props.currentUser} 
                closeForm={() => this.setState({ showEdit: false })} 
                editUser={this.props.editUser} />
            
        } else {
            let areYouSneezy
            if (this.props.currentUser.email === "sneezy@fairy.land") {
                areYouSneezy = true
            }
            return(
                <Container>
                    <Card.Group centered>
                    {areYouSneezy ? null :
                            <Button.Group vertical>
                                <Button icon primary onClick={() => this.setState({ showEdit: true })}><Icon name="edit"/> Edit</Button>
                                <Button icon color='red' onClick={() => this.props.deleteUser(this.props.currentUser.id)}><Icon name="trash alternate"/>Delete</Button>
                            </Button.Group>
                    }

                    {/* <Segment.Group horizontal raised compact> */}
                        <Card>
                        {/* <Segment > */}
                            <Header as='h2' >
                                <Icon name='user circle' />
                                <Header.Content>
                                    {this.props.currentUser.username}
                                </Header.Content>
                            </Header>
                        {/* </Segment> */}
                        </Card>
                        <Card>
                        {/* <Segment> */}
                            <Header as='h2' >
                                <Icon name='mail' />
                                <Header.Content>
                                    {this.props.currentUser.email}
                                </Header.Content>
                            </Header>
                        {/* </Segment> */}
                        </Card>
                    </Card.Group>
                    {/* </Segment.Group> */}
                    <br />
                    <FeelingsContainer currentUser={this.props.currentUser} feelings={this.props.feelings} date={this.state.date} />
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