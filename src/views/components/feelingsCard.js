import React, { Component } from 'react';
import { Card, Icon, List, Container } from 'semantic-ui-react';

export class FeelingsCard extends Component {

    formatMonthDayYear = (date) => {
            const dateObject = new Date(date)
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            const month = months[dateObject.getMonth()]
            const numDay = dateObject.getDate()
            const year = dateObject.getFullYear()

        return month + ' ' + numDay + ', ' + year
    }

    getSporeList = (day) => {
        let list = []
        Object.keys(day).forEach(key => {
            if (['id', 'month', 'date', 'year', 'fulldate', 'created_at', 'updated_at'].indexOf(key) === -1) {
                list.push(key)
            }
        })
        const limitedList = list.filter((item) => Number(day[item]) > 20)
        const topFive = limitedList.sort((a, b) => b - a).slice(0, 5)
        return (
            topFive.map((spore, index) => {
                return <List.Item key={index} >{`${spore} (${day[spore]})`}</List.Item>
            })
        )
    }

    renderBadSporeList = () => {
        const spores = this.getSporeList(this.props.feeling.day)
        if(spores.length === 0) {
            return (
                <Card.Description>If you're allergic to something, it looks like it wasn't in the air that day.</Card.Description>
            )
        } else {
            return (
                <Container>
                    <Card.Description>You might be allergic to:</Card.Description>
                    <List bulleted>
                        {spores}
                    </List>
                </Container>
            )
        }
    }

    renderNotBadSporeList = () => {
        const spores = this.getSporeList(this.props.feeling.day)
        if(spores.length === 0) {
            return null
        } else {
            return (
                <Container>
                    <Card.Description>You might not be allergic to:</Card.Description>
                    <List bulleted>
                        {spores}
                    </List>
                </Container>
            )
        }
    }

    render() {
        let isGoodFeeling
        if (this.props.feeling.feeling.rating > 3) {
            isGoodFeeling = true
        } else {
            isGoodFeeling = false
        }
        return (
            <Card link color={isGoodFeeling ? "green" : "red"} >
                <Card.Content>
                    <Icon name={isGoodFeeling ? 'thumbs up outline' : 'thumbs down outline'} color={isGoodFeeling ? "green" : "red"}/>
                    <Card.Header>{this.formatMonthDayYear(this.props.feeling.day.fulldate)} </Card.Header>
                    {isGoodFeeling ? this.renderNotBadSporeList() : this.renderBadSporeList()}
                </Card.Content>
            </Card>
        );
    }
}

// export const FeelingsCard;
