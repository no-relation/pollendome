import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2'
import { Header, Container, Icon } from 'semantic-ui-react';
import { pollenOrMold } from './pollenormold';

class _Chart extends Component {

    render = () => {
        if (this.props.isLoading) {
            return <Icon loading name="sun outline" size="huge" />
        }
        if (this.props.days && this.props.days.length !== 0) {
            return (
                <Container>
                    <Line data={this.data(this.props.days)} options={this.options}/>
                    <Header.Subheader disabled>Readings are not available for all days</Header.Subheader>
                </Container>
                );
        } else {
            return <Header>There is no data available for the requested days</Header>
        }
    }

    getDataset = (daySet, spore) => {
        let colorhue;
        if (pollenOrMold(spore) === 'mold'){
            // teal, blue, purple
            colorhue = Math.floor(Math.random() * 125 + 175)
        } else if (pollenOrMold(spore) === 'pollen') {
            // red to green
            colorhue = Math.floor(Math.random() * 125)
        } else {
            // red
            colorhue = 360
        }
        console.log(spore, ':', pollenOrMold(spore))
        return {
            label: spore.replace("___", " / ").replace(/_/g, " "),
            yAxisID: pollenOrMold(spore),
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

    // 5 highest species of pollen or mold
    getHighest = (day, sporeType) => {
        let list = []
        Object.keys(day).forEach( key => {
            if (sporeType === pollenOrMold(key)) {
                list.push(key)
            }
        })
        const limitedList = list.filter((item) => Number(day[item]) > 0)
        
        const sortedList = limitedList.sort((a, b) => Number(day[b]) - Number(day[a]))
        return sortedList.slice(0, 4)
    }

    getSporeList = (day) => {
        const pollens = this.getHighest(day, "pollen")
        const molds = this.getHighest(day, "mold")

        return pollens.concat(molds)
    }

    // build data object for passing into line chart
    data = (days) => {
        if (days && days.length > 0) {
            return ({
                labels: days.map(day => {
                    return day.fulldate.slice(5)
                }),
                datasets: this.getSporeList(days[0]).map(spore => {
                    return this.getDataset(days, spore)
                })
            })
        } else {
            return ({
                labels: [],
                datasets: []
            })
        }
    }

    // chartjs options
    options = {
            scales: {
                yAxes: [{
                    id: "pollen",
                    type: 'linear',
                    position: 'left'
                }, {
                    id: "mold",
                    type: 'linear',
                    position: 'right'
                }]
            }
    }
}


const mapStateToProps = (state) => ({
    days: state.days,
    isLoading: state.isLoading
})

export const Chart = connect(mapStateToProps)(_Chart);
