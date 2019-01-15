import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

const monthsAvailable = [
    { key: "January", text: "January", value: "January" },
    { key: "February", text: "February", value: "February" },
    { key: "March", text: "March", value: "March" },
    { key: "April", text: "April", value: "April" },
    { key: "May", text: "May", value: "May" },
    { key: "June", text: "June", value: "June" },
    { key: "July", text: "July", value: "July" },
    { key: "August", text: "August", value: "August" },
    { key: "September", text: "September", value: "September" },
    { key: "October", text: "October", value: "October" },
    { key: "November", text: "November", value: "November" },
    { key: "December", text: "December", value: "December" },
]
const datesAvailable = () => {
    let array = []
    for (let i=1; i<=31; i++){
        const option = { key: i.toString(), text: i.toString(), value: i.toString() }
        array.push(option)
    }
    return array
}

    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31

const yearsAvailable = [
    { key: "2018", text: "2018", value: "2018" },
    { key: "2017", text: "2017", value: "2017" },
    { key: "2016", text: "2016", value: "2016" },
    { key: "2015", text: "2015", value: "2015" },
    { key: "2014", text: "2014", value: "2014" },
    { key: "2013", text: "2013", value: "2013" },
]

export class DaysForm extends Component {

    state = {
        month: '',
        date: '',
        year: ''
    }

    handleOnChangeMonth = (e, { value }) => {
        this.setState({
            month: value
        })
    }
    handleOnChangeDate = (e, { value }) => {
        this.setState({
            date: value
        })
    }
    handleOnChangeYear = (e, { value }) => {
        this.setState({
            year: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()


    }

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit} >
                <Form.Group>
                    <Dropdown placeholder="Month" options={monthsAvailable} search selection onChange={this.handleOnChangeMonth} />
                    <Dropdown placeholder="Date" options={datesAvailable()} search selection onChange={this.handleOnChangeDate} />
                    <Dropdown placeholder="Year" options={yearsAvailable} search selection onChange={this.handleOnChangeYear} />

                </Form.Group>
            </Form>
        );
    }
}

// export default DaysForm;
