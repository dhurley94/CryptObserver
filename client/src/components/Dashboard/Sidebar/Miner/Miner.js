import React from 'react';
import axios from 'axios';
import { Table, Row, Col, Form, Input, Button, Label, FormGroup } from 'reactstrap';

class Miner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            databaseInfo: [],
            workerTable: [],
            address: '',
            algo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/miner')
            .then(results => {
                this.setState({
                    databaseInfo: results.data
                })
            })
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

    intervalUpdate() {
        let tempArray = [];
        setInterval(() => {
            tempArray = [];
            this.state.databaseInfo.forEach(element => {
                axios.get('https://api.nanopool.org/v1/' + element.algorithm + '/user/' + element.address)
                    .then(results => {
                        if (results.data.status) {
                            tempArray.push(results.data.data)
                        }
                    }) 
                this.setState({
                    workerTable: tempArray
                })
            });
        }, 30000)
    }

    render() {
        this.intervalUpdate()
        return (
            <Row>
            <Col md="6">
                <h3>Nanopool & Worker Tracking</h3>
                    <Form onSubmit={this.handleSubmit}> 
                        <FormGroup>
                            <FormGroup>
                                <Label for="algo">Select</Label>
                                <Input disabled type="select" name="algo" value={this.state.algo} onChange={this.handleChange} id="algo">
                                    <option>Work in Progress</option>
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
                        <Button disabled type="submit">Add</Button>
                    </Form>
            </Col>
            <Col md="6">
                <Table>
                    <thead>
                        <tr>
                        <td>Crypto</td>
                        <td>Workers</td>
                        <td>Current Hash</td>
                        <td>Balance</td>
                        </tr>
                    </thead>
                    <tbody>
                        <p>Work In Progress</p>
                        {this.state.workerTable.map(miner => (
                            <tr>
                                <td>{miner.account}</td>
                                <td>{miner.account.workers.length}</td>
                                <td>{miner.hashrate}</td>
                                <td>{miner.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
            </Row>
        );
    }
}

export default Miner;
