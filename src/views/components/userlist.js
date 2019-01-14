import React, { Component } from 'react';
import { Container, Card, Icon } from 'semantic-ui-react';
import { API } from '../../state/API';

export class UserList extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        fetch(`${API}/users`)
            .then(res => res.json())
            .then(users => {
                this.setState({ users });
            });
    }

    deleteUser = (id) => {
        fetch(`${API}/users/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
    }

    render() {
        return (
            <Container>
                {this.state.users.map( user => {
                    return  (
                        <Card>
                            <Card.Content>
                                <Card.Header>{user.username}</Card.Header>
                                <Card.Description>{user.email}</Card.Description>
                                <Icon name='delete' onClick={() => this.deleteUser(user.id)} />
                            </Card.Content>
                        </Card>
                    )
                })}
            </Container>
        );
    }
}

