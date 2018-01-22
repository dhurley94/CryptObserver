import React from 'react';
import { Col, Row, InputGroup, Input, Form, Button, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

const Feet = props => (
    <div className="container">
        <Row>
            <Col style={{ textAlign: 'left' }} md="4" sm="12">
                <h3><u>Quick View</u></h3>
                <p>random info</p>
            </Col>
            <Col style={{ textAlign: 'center' }} md="4" sm="12">
                <h3><u>Feature Requests</u></h3>
                <Form>
                    <InputGroup type="text" name="user">
                        <Input type="text" name="name" placeholder="Full Name" required />
                        <Input type="text" name="name" email="email" placeholder="example@me.com" required />
                    </InputGroup>
                    <hr />
                    <FormGroup>
                        <Label for="Comments">Suggestions?</Label>
                        <Input type="textarea" name="text" id="Comments" />
                    </FormGroup>
                    <Button type="reset">Reset</Button>
                    &nbsp;
                    &nbsp;
                    <Button type="submit">Send</Button>
                </Form>
            </Col>
            <Col style={{ textAlign: 'right' }} md="4" sm="12">
                <h3><u>Twitter Feed</u></h3>
                <p><a className="twitter-timeline" href="https://twitter.com/devidhurley?tweet-limit=1">Tweets by cryptocurrency</a></p>
            </Col>
        </Row>
    </div>
)

export default Feet;