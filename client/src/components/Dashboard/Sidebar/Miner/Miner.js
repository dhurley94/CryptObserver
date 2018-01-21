import React from 'react';
import axios from 'axios';
import { Table, Row, Form, InputGroup, Input, Button, Label } from 'reactstrap';

class Miner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            databaseInfo: []
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
                <h3>Pools & Workers</h3>
                    <Form>
                        <Label for="algo">Address</Label>
                        <Input type="select" name="algo" onChange={this.handleChange} />
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" onChange={this.handleChange} />
                        <Button type="submit">Add</Button>
                    </Form>
                <hr />

            </Row>
        );
    }
}

export default Miner;
