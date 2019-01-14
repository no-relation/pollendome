import React, { Component } from 'react';
import { Container, Card, Icon } from 'semantic-ui-react';
import { API } from '../../state/API';
import { Link } from 'react-router-dom';

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
                                <Card.Header as={Link} to={`/user/${user.id}`} >{user.username}</Card.Header>
                                <Card.Description>{user.email}</Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Container>
        );
    }
}

