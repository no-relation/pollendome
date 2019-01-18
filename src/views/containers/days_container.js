import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { DaysForm } from '../components/daysForm';
import { connect } from 'react-redux';
import { days_actions } from '../../state/actions/days_actions';
import { Chart } from '../components/chart';

class _DaysContainer extends Component {

    render() {
        return (
            <Container>
                <Chart days={this.props.days} />
                <Divider />
                <DaysForm getDays = {this.props.getDays}/>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    days: state.days
})

export const DaysContainer = connect(mapStateToProps, days_actions)(_DaysContainer);
