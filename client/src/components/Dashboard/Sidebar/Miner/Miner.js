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
        } catch (Exception) {
            console.log(Exception);
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
                            <FormGroup>
                                <Label for="algo">Select</Label>
                                <Input type="select" name="algo" value={this.state.algo} onChange={this.handleChange} id="algo">
                                    <option>ETH</option>
                                    <option>ETC</option>
                                    <option>XMR</option>
                                    <option>ETN</option>
                                    <option>PSC</option>
                                    <option>ZCH</option>
                                    <option>SIA</option>
                                </Input>
                            </FormGroup>
                        <hr />
                        </FormGroup>
                        <Button type="submit">Add</Button>
                    </Form>
                <hr />
            </Col>
            <Col md="6">
                <Table>
                    <thead>
                    
                    </thead>
                </Table>
            </Col>
            </Row>
        );
    }
}

export default Miner;
