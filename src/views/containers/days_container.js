import React, { Component } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import { DaysForm } from '../components/daysForm';
import { connect } from 'react-redux';
import { days_actions } from '../../state/actions/days_actions';
import { Chart } from '../components/chart';
import { withRouter } from 'react-router';

class _DaysContainer extends Component {

    pastOrFuture = (url) => {
        if (url === '/future') {
            const today = new Date()
            today.setFullYear(3000)
            const startdate = new Date(today)
            startdate.setDate(startdate.getDate()-3)
            const enddate = new Date(today)
            enddate.setDate(enddate.getDate()+3)

            // this.props.getDays({ 
            //     dates: [startdate, enddate]
            // })
            return (
                <Header>Get forecasts for coming days</Header>
            );
        } else if (url === '/past') {
            return <Header>See data for past dates</Header>
        }

    }

    render() {
        return (
            <Container>
                {this.pastOrFuture(this.props.location.pathname)}
                <Chart days={this.props.days} />
                <Divider />
                <DaysForm days={this.props.days} getDays={this.props.getDays} />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    days: state.days
})

export const DaysContainer = withRouter(connect(mapStateToProps, days_actions)(_DaysContainer));
