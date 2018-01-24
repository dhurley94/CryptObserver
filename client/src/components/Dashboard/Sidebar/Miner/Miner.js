import React from 'react';
import axios from 'axios';
import { Table, Row, Col, Form, InputGroup, Input, Button, Label, FormGroup } from 'reactstrap';

class Miner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            databaseInfo: [],
            address: '',
            algo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        try {
            axios.get('https://api.nanopool.org/v1/' + this.props.algo + '/user/' + this.props.address)
                .then(results => {
                    console.log(results);
                })
                .catch(error => { (console.log(error)) });
        } catch (Exceotion) {
            console.log(Exceotion);
        }
    }

    render() {
        return (
            <Row>
            <Col md="6">
                <h3>Pools & Workers</h3>
                    <Form onSubmit={this.handleSubmit}> 
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                            <hr />
                            <Label for="algo">Algorithm</Label>
                            <Input type="select" name="algo" value={this.state.algo} onChange={this.handleChange} />
                        </FormGroup>
                        <hr />
                        <Button type="submit">Add</Button>
                    </Form>
                <hr />
            </Col>
            </Row>
        );
    }
}

export default Miner;
