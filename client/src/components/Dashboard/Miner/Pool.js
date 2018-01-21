import React from 'react';
import axios from 'axios';
import {Table, Row } from 'reactstrap';

class Pool extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            address: props.address,
            algo: props.algo,
        }
    }

    componentDidMount() {
        try {
            axios.get('https://api.nanopool.org/v1/' + this.props.algo + '/user/' + this.props.address)
                .then(results => {
                    console.log(results);
                })
                .catch(error => { (console.log(error)) });  
        } catch(Exceotion) {
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

export default Pool;
