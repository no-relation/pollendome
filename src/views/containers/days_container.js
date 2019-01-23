import React, { Component } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import { DaysFormPast } from '../components/daysForm';
import { DaysFormFuture } from '../components/daysForm';
import { connect } from 'react-redux';
import { days_actions } from '../../state/actions/days_actions';
import { Chart } from '../components/chart';
import { withRouter } from 'react-router';

class _DaysContainer extends Component {

    pastOrFuture = (url) => {
        if (url === '/future') {
            return (
                <Container>
                    <Header>Get forecasts for coming days</Header>
                    <Chart days={this.props.days} />
                    <Header.Subheader disabled>Average reading for a given day of the year</Header.Subheader>
                    <Divider />
                    <DaysFormFuture getDays={this.props.getDays} />
                </Container>

            );
        } else if (url === '/past') {

            return (
                <Container>
                    <Header>See data for past dates</Header>
                    <Chart days={this.props.days} />
                    <Divider />
                    <DaysFormPast getDays={this.props.getDays} />
                </Container>

            ) 
        }

    }

    render() {
        return this.pastOrFuture(this.props.location.pathname)
    }
}

const mapStateToProps = state => ({
    days: state.days
})

export const DaysContainer = withRouter(connect(mapStateToProps, days_actions)(_DaysContainer));
