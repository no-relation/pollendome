import React, { Component } from 'react';
import { Header, Form, Container, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { feelings_actions } from '../../state/actions/feelings_actions';

class _FeelingsForm extends Component {

    state = {
        today: this.props.date
    }

    onGoodClick = (e) => {
        this.props.createFeeling({
            rating: 5,
            user_id: this.props.currentUser.id,
            fulldate: this.state.today
        })
    }

    onBadClick = (e) => {
        this.props.createFeeling({
            rating: 0,
            user_id: this.props.currentUser.id,
            fulldate: this.state.today
        })
    }

    render() {
        return (
            <Container>
                <Header.Subheader>How do you feel today?</Header.Subheader>
                <Form>
                    <Button.Group size='small'>
                        <Button icon positive labelPosition='left' onClick={this.onGoodClick} >
                            <Icon name='thumbs up' />
                            A-okay!
                        </Button>
                        <Button.Or/>
                        <Button icon negative labelPosition='right' onClick={this.onBadClick}>
                            Ugh
                            <Icon name='thumbs down' />
                        </Button>
                    </Button.Group>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export const FeelingsForm = connect(mapStateToProps, feelings_actions)(_FeelingsForm);
