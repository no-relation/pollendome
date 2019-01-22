import React, { Component } from 'react';
import { Card, Container, Divider, Icon } from 'semantic-ui-react';
import { FeelingsCard } from '../components/feelingsCard';
import { FeelingsForm } from '../components/feelingsForm';
import { connect } from 'react-redux';
import { feelings_actions } from '../../state/actions/feelings_actions';

class _FeelingsContainer extends Component {

    async componentDidMount() {
        await this.props.currentUser
        this.props.getFeelings(this.props.currentUser.id)
    }

    todaysFeeling = () => {
        if (this.props.feelings.find((feel) => feel.fulldate !== this.props.date.fulldate)) {
            return <FeelingsForm date={this.props.date} />
        }
    }

    render() {
        if (this.props.feelings){
            return (
                <Container>
                    {this.todaysFeeling()}
                    <Divider />
                    <Card.Group>
                        {this.props.feelings.map(feeling => <FeelingsCard key={feeling.feeling.id} feeling={feeling} /> )}
                        {/* <Card link color='blue'>
                            <Card.Content>
                            <Icon name="hand rock outline" />
                            <Card.Description>Add a feeling for another day</Card.Description>
                            </Card.Content>
                        </Card> */}
                    </Card.Group>
                </Container>
            )
        } else {
            return <Icon loading name='spinner' />
        }
    }
}

export const FeelingsContainer = connect(null, feelings_actions)(_FeelingsContainer);