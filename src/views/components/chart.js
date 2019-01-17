import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2'

class _Chart extends Component {

    state = {
        isLoading: true
    }

    render = () => {
        return (
            <Line data={this.data()}/>
        );
    }

    getDataset = (daySet, spore) => {
        return {
            label: spore,
            data: daySet.map((day) => {
                return Number(day[`${spore}`])
            }),
            borderColor: `hsla(${Math.floor(Math.random() * 360)}, 80%, 45%, 1)`
        }
    }

    getSporeList = (day) => {
        let list = []
        Object.keys(day).forEach( prop => {
            if (day.prop !== 'na') {
                if (['id', 'month', 'date', 'year', 'fulldate', 'created_at', 'updated_at'].indexOf(prop) <= -1) {
                    list.push(prop)
                }
            }
        })
        return list
    }


    data = () => {
        if (this.props.days) {
            return ({
                labels: this.props.days.map(day => {
                    return day.date
                }),
                datasets: this.getSporeList(this.props.days[0]).map(spore => {
                    return this.getDataset(this.props.days, spore)
                })
                // [this.getDataset(this.props.days, 'cladosporium')]
                
                // [
                //     {
                //         label: "My First dataset",
                //         data: [65, 59, 80, 81, 56, 55, 40],
                //         backgroundColor: 'rgba(66, 63, 237,0.3)',
                //         borderColor: "rgba(66, 63, 237,1)"
                //     },
                // ]
                //     // {
                    //     //     label: "My Second dataset",
                    //     //     fillColor: "rgba(151,187,205,0.2)",
                    //     //     strokeColor: "rgba(151,187,205,1)",
                    //     //     pointColor: "rgba(151,187,205,1)",
                    //     //     pointStrokeColor: "#fff",
                    //     //     pointHighlightFill: "#fff",
                    //     //     pointHighlightStroke: "rgba(151,187,205,1)",
                    //     //     data: [28, 48, 40, 19, 86, 27, 90]
                    //     // }
                    // ]
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
