import React, { Component } from 'react';
import { Header, Form, Container, Icon, Button } from 'semantic-ui-react';

export class FeelingsForm extends Component {

    onGoodClick = (e) => {

    }

    onBadClick = (e) => {

    }

    render() {
        return (
            <Container>
                <Header.Subheader>How do you feel today?</Header.Subheader>
                <Form>
                    <Button.Group size='small'>
                        <Button icon positive labelPosition='left' onClick={this.onGoodClick} >
                            <Icon name='thumbs up' />
                            A-okay!
                        </Button>
                        <Button.Or/>
                        <Button icon negative labelPosition='right' onClick={this.onBadClick}>
                            Ugh
                            <Icon name='thumbs down' />
                        </Button>
                    </Button.Group>
                </Form>
            </Container>
        );
    }
}

// export default FeelingsForm;
