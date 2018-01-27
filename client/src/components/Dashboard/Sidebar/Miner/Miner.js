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
        axios.get('/api/miner')
            .then(results => console.log(results))
            .catch(error => console.log(error))
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        try {
            axios.get('https://api.nanopool.org/v1/' + this.state.algo + '/user/' + this.state.address)
                .then(results => {
                    if (results.data.status) {
                        axios.post('/api/miner/add', {
                            address: this.state.address,
                            algo: this.state.algo
                        })
                        console.log(results.data.data);
                    }
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
                <h3>Nanopool & Worker Tracking</h3>
                    <Form onSubmit={this.handleSubmit}> 
                        <FormGroup>
                            <FormGroup>
                                <Label for="algo">Select</Label>
                                <Input type="select" name="algo" value={this.state.algo} onChange={this.handleChange} id="algo">
                                    <option>eth</option>
                                    <option>etc</option>
                                    <option>xmr</option>
                                    <option>etn</option>
                                    <option>psc</option>
                                    <option>zch</option>
                                    <option>sia</option>
                                </Input>
                            </FormGroup>
                            <hr />
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                            <hr />
                        
                        </FormGroup>
                        <Button type="submit">Add</Button>
                    </Form>
            </Col>
            <Col md="6">
                <Table>
                    <thead>
                        <tr>
                        <td>Algorithm</td>
                        <td>Workers</td>
                        <td>Current Hash</td>
                        <td>Balance</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </Col>
            </Row>
        );
    }
}

export default Miner;
