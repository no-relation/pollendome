import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { Calendar } from 'react-calendar'

export class DaysForm extends Component {

    state = {
        dates: [
            new Date("2014-03-03"),
            new Date("2014-03-20")
        ]
    }

    // why does this cause line 44 to error out?
    // componentDidMount() {
    //     if (this.props.days) {
    //         this.setState({ dates: [this.props.days[0], this.props.days[-1]] })
    //     }
    // }
        
        handleOnChangeCalendar = date => this.setState({ dates: date })
        
        handleOnSubmit = (e) => {
            e.preventDefault()
            this.props.getDays(this.state)
        }
        
    render() {
        return (
            <Form onSubmit={this.handleOnSubmit} >
                <Form.Button color='blue'>Submit</Form.Button>
                <Grid relaxed columns={2}>
                    <Grid.Column>
                        <Calendar 
                            minDate={new Date("2013-01-01")}
                            selectRange={true}
                            onChange={this.handleOnChangeCalendar}
                            value={this.state.dates}
                            calendarType="US"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Form.Input readOnly fluid label="Start Date" value={this.state.dates[0].toDateString()} placeholder="start date" />
                            <Form.Input readOnly fluid label="End Date" value={this.state.dates[1].toDateString()} placeholder="start date"/>
                        </Form.Group>
                    </Grid.Column>
                </Grid>
            </Form>
        );
    }
}

// export default DaysForm;
