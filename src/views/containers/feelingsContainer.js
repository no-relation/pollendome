import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { FeelingsCard } from '../components/feelingsCard';
import { FeelingsForm } from '../components/feelingsForm';

export class FeelingsContainer extends Component {
    render() {
        if (this.props.feelings){
            return (
                <Card.Group>
                    {this.props.feelings.map(feeling => <FeelingsCard key={feeling.feeling.id} feeling={feeling} /> )}
                    {/* <Card link color='blue'>
                        <Card.Content>
                            <Icon name="hand rock outline" />
                            <Card.Description>Add a feeling for another day</Card.Description>
                        </Card.Content>
                    </Card> */}
                </Card.Group>
            )
        } else {
            return <FeelingsForm date={this.props.date} />
        }
    }
}

// export const FeelingsContainer;
