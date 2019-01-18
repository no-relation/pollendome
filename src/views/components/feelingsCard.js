import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

export class FeelingsCard extends Component {

    formatMonthDayYear = (date) => {
            const dateObject = new Date(date)
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            const month = months[dateObject.getMonth()]
            const numDay = dateObject.getDate()
            const year = dateObject.getFullYear()

        return month + ' ' + numDay + ', ' + year
    }

    render() {
        let isGoodFeeling
        if (this.props.feeling[0].rating > 3) {
            isGoodFeeling = true
        } else {
            isGoodFeeling = false
        }
        return (
            <Card color={isGoodFeeling ? "green" : "red"} >
                <Card.Content>
                    <Icon name={isGoodFeeling ? 'thumbs up outline' : 'thumbs down outline'} />
                    <Card.Header>{this.formatMonthDayYear(this.props.feeling[1].fulldate)} </Card.Header>
                </Card.Content>
            </Card>
        );
    }
}

// export const FeelingsCard;
