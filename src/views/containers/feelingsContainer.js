import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { FeelingsCard } from '../components/feelingsCard';
import { FeelingsForm } from '../components/feelingsForm';

export class FeelingsContainer extends Component {
    render() {
        if (this.props.feelings){
            return (
                <Card.Group>
                    {this.props.feelings.map(feeling => <FeelingsCard feeling={feeling} /> )}
                </Card.Group>
            )
        } else {
            return <FeelingsForm date={this.props.date} />
        }
    }
}

// export const FeelingsContainer;
