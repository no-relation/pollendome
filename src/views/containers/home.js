import React, { Component } from "react";
import { Chart } from '../components/chart';
import { Container, Header } from "semantic-ui-react";
import { connect } from 'react-redux';
import { days_actions } from '../../state/actions/days_actions';
import { Welcome } from "../components/welcome";

class _Home extends Component {

    thisTimeLastYear = () => {
        const now = new Date()
        now.setFullYear(now.getFullYear()-1)
        let then = new Date(now)
        then.setDate(now.getDate()-10)
        return [then, now]
    }

    componentDidMount() { 
        this.props.getDays({ dates: this.thisTimeLastYear() })
    }
    
    render() {
        const onlyADayArray = this.thisTimeLastYear().map( longdate => `${longdate.getMonth()+1}/${longdate.getDate()}/${longdate.getFullYear()}`)
        const lastYearDays = onlyADayArray.join(' to ')
        return (
            <Container>
                <Welcome currentUser={this.props.currentUser} feelings={this.props.feelings} />
                <Header>Looking Back</Header>
                <Header.Subheader>Allergen counts from {lastYearDays ? lastYearDays : "this time last year"}</Header.Subheader>
                <Chart data={this.props.dates} />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    days: state.days,
    currentUser: state.currentUser,
    feelings: state.feelings
})

export const Home = connect(mapStateToProps, days_actions)(_Home);
