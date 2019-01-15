import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { DaysForm } from '../components/daysForm';

export class DaysContainer extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <DaysForm />

            </Container>
        );
    }
}

// export default DaysContainer;
