import React, { Component } from "react";
import { Chart } from '../components/chart';
import { Container, Header } from "semantic-ui-react";
import { connect } from 'react-redux';
import { days_actions } from '../../state/actions/days_actions';

class _Home extends Component {


    componentDidMount() { 
        const now = new Date()
        now.setFullYear(now.getFullYear()-1)
        let then = new Date(now)
        then.setDate(now.getDate()-7)
        this.props.getDays({ dates: [then, now] })
    }

    render() {
        return (
            <Container>
                <Header>Looking Back</Header>
                <Header.Subheader>Allergen counts from this time last year </Header.Subheader>
                <Chart data={this.props.dates} />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    days: state.days
})

export const Home = connect(mapStateToProps, days_actions)(_Home);
