import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { DaysForm } from '../components/daysForm';
import { connect } from 'react-redux';
import { days_actions } from '../../state/actions/days_actions';

class _DaysContainer extends Component {

    render() {
        return (
            <Container>
                <Header>Days Gone By</Header>
                <DaysForm getDays = {this.props.getDays}/>
            </Container>
        );
    }
}

export const DaysContainer = connect(null, days_actions)(_DaysContainer);
