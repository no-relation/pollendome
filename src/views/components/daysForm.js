import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { Calendar } from 'react-calendar'
// TODO: refactor into one function
// TODO: figure out how to get DateRangePicker to render right, or find something better
// import DateRangePicker from '@wojtekmaj/react-daterange-picker'

export class DaysFormPast extends Component {

    state = {
        dates: [
            new Date('2015-02-01'),
            new Date('2015-04-30')
        ],
        formParams: {
            mindate: new Date("2013-01-01"),
            maxdate: new Date("2999-12-31"),
            mindetail: 'decade',
        }
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
                <Grid relaxed columns={2}>
                    <div>
                        <Grid.Column >
                            <Calendar responsive
                                minDate={this.state.formParams.mindate}
                                maxDate={this.state.formParams.maxdate}
                                minDetail={this.state.formParams.mindetail}
                                selectRange={true}
                                onChange={this.handleOnChangeCalendar}
                                value={this.state.dates}
                                calendarType="US"
                            />
                        </Grid.Column>
                    </div>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Form.Input readOnly fluid label="Start Date" value={this.state.dates[0].toDateString().slice(4, 15)} />
                            <Form.Input readOnly fluid label="End Date" value={this.state.dates[1].toDateString().slice(4, 15)} />
                        </Form.Group>
                    </Grid.Column>
                </Grid>
            </Form>
        );
    }
}

export class DaysFormFuture extends Component {

    state = {
        dates: [
            new Date('2000-04-24'),
            new Date('2000-05-08')
        ],
        formParams: {
            mindate: new Date("2000-01-01"),
            maxdate: new Date("2000-12-31"),
            mindetail: 'year',
        }
    }

    handleOnChangeCalendar = date => this.setState({ dates: date })

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.getDays(this.state)
    }

    render() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        return (
            <Form onSubmit={this.handleOnSubmit} >
                <Form.Button color='blue'>Submit</Form.Button>
                <Grid relaxed columns={2}>
                    <Grid.Column>
                        <Calendar
                            navigationLabel={({ date }) => `${months[date.getMonth()]}`}
                            minDate={this.state.formParams.mindate}
                            maxDate={this.state.formParams.maxdate}
                            minDetail={this.state.formParams.mindetail}
                            selectRange={true}
                            onChange={this.handleOnChangeCalendar}
                            value={this.state.dates}
                            calendarType="US"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Form.Input readOnly fluid label="Start Date" value={this.state.dates[0].toDateString().slice(4, 10)} />
                            <Form.Input readOnly fluid label="End Date" value={this.state.dates[1].toDateString().slice(4, 10)} />
                        </Form.Group>
                    </Grid.Column>
                </Grid>
            </Form>
        );
    }
}

// export default DaysForm;