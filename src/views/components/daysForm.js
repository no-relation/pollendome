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

    handleOnChangeCalendar = date => this.setState({ dates: date })

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.getDays(this.state)
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit} >
                <Form.Button color='blue'>Submit</Form.Button>
                <Grid>
                    <Grid.Column width={8}>
                        <Calendar 
                            minDate={new Date("2013-01-01")}
                            selectRange={true}
                            onChange={this.handleOnChangeCalendar}
                            value={this.state.dates}
                            calendarType="US"
                        />
                    </Grid.Column>

                    <Form.Group widths='equal'>
                        <Form.Input readOnly fluid label="Start Date" value={this.state.dates[0].toDateString()} placeholder="start date" width={4} />
                        <Form.Input readOnly fluid label="End Date" value={this.state.dates[1].toDateString()} placeholder="start date"/>
                    </Form.Group>
                </Grid>
            </Form>
        );
    }
}

// export default DaysForm;
