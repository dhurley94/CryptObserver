import React from 'react';
import axios from 'axios';
import { Table, Row, Form, InputGroup, Input, Button } from 'reactstrap';

class Miner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            databaseInfo: []
        }
    }

    componentDidMount() {
        
    }

    onSubmitRequest() {
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

                <hr />

            </Row>
        );
    }
}

export default Miner;
