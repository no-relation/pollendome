import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2'
import { Header, Container } from 'semantic-ui-react';
import { pollenOrMold } from './pollenormold';

class _Chart extends Component {

    render = () => {
        if (this.props.days && this.props.days.length !== 0) {
            return (
                <Container>
                    <Line data={this.data()}/>
                    <Header.Subheader disabled>Readings are not taken on all days</Header.Subheader>
                </Container>
                );
        } else {
            return <Header>There is no data available for the requested days</Header>
        }
    }

    getDataset = (daySet, spore) => {
        let colorhue;
        if (pollenOrMold(spore) === 'mold'){
            colorhue = Math.floor(Math.random() * 125 + 175)
        } else if (pollenOrMold(spore) === 'pollen') {
            colorhue = Math.floor(Math.random() * 125)
        }
        return {
            label: spore,
            data: daySet.map((day) => {
                const value = Number(day[`${spore}`])
                if (isNaN(value)) {
                    return 0
                } else {
                    return value
                }
            }),
            borderColor: `hsla(${colorhue}, 80%, 45%, 1)`
        }
    }

    getSporeList = (day) => {
        let list = []
        Object.keys(day).forEach( key => {
            if (['id', 'month', 'date', 'year', 'fulldate', 'created_at', 'updated_at'].indexOf(key) === -1) {
                list.push(key)
            }
        })
        const limitedList = list.filter((item) => Number(day[item]) > 20)
        const sortedList = limitedList.sort((a,b) => b-a)
        return sortedList.slice(0, 7)
    }

    data = () => {
        if (this.props.days && this.props.days.length > 0) {
            return ({
                labels: this.props.days.map(day => {
                    return `${day.month}-${day.date}`
                }),
                datasets: this.getSporeList(this.props.days[0]).map(spore => {
                    return this.getDataset(this.props.days, spore)
                })
            })
        } else {
            return ({
                labels: [],
                datasets: []
            })
        }
    };
}


const mapStateToProps = state => {
    return { days: state.days }
}

export const Chart = connect(mapStateToProps)(_Chart);
