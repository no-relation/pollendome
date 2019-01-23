import React, { Component } from 'react';
import { Card, Icon, List, Container } from 'semantic-ui-react';
import { pollenOrMold } from './pollenormold';

export class FeelingsCard extends Component {

    formatMonthDayYear = (date) => {
            const dateObject = new Date(date)
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            const month = months[dateObject.getMonth()]
            const numDay = dateObject.getDate()
            const year = dateObject.getFullYear()

        return month + ' ' + numDay + ', ' + year
    }

    getHighest = (day, sporeType) => {
        let list = []
        Object.keys(day).forEach(key => {
            if (sporeType === pollenOrMold(key)) {
                list.push(key)
            }
        })
        const limitedList = list.filter((item) => Number(day[item]) > 0)
        const sortedList = limitedList.sort((a, b) => b - a)

        return sortedList.slice(0, 4)

    }
    getSporeList = (day) => {
        const spores = this.getHighest(day, "pollen").concat(this.getHighest(day, "mold"))
        const sporeIcon = (spore) => {
            if (pollenOrMold(spore) === 'pollen') {
                return <List.Icon name="tree" color="orange"/>
            } else {
                return <List.Icon name="theme" color="teal" />
            }
        } 

        return (
            spores.map((spore, index) => {
                return <List.Item key={index} > 
                    {sporeIcon(spore)}
                    <List.Content> {`${spore} (${day[spore]})`} </List.Content>
                </List.Item>
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
                    <Card.Description>You might be allergic to: (count/m³)</Card.Description>
                    <List >
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
                    <Card.Description>You might not be allergic to: (count/m³)</Card.Description>
                    <List>
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
                <Card.Meta>
                    <Icon circular name="tree" color="orange" />pollen
                    <Icon circular name="theme" color="teal" />mold
                </Card.Meta>
            </Card>
        );
    }
}

// export const FeelingsCard;
