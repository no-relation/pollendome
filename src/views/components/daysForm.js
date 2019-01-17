import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Calendar } from 'react-calendar'

export class DaysForm extends Component {

    state = {
        dates: new Date("2014-03-03"),
    }

    handleOnChange = date => this.setState({ dates: date })

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.getDays(this.state)
    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit} >
                <Calendar 
                    minDate={new Date("2013-01-01")}
                    selectRange={true}
                    onChange={this.handleOnChange}
                    value={this.state.dates}
                    calendarType="US"
                />
                <Form.Button color='blue'>Submit</Form.Button>
            </Form>
        );
    }
}

// export default DaysForm;
