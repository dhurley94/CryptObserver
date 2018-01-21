import React from 'react';
import { Form, Input, Button, Label } from 'reactstrap';
import Pool from './Pool';

class Miner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pools: [],
            address: [],
            message: '',
            setup: false,
            activeTab: 1
        }
    }

    checkMiners() {
        if (this.state.pools.length === 0 || this.state.address === 0) {
            this.setState({
                message: 'Please set a pool and your address.'
            })
        }
    }

    formSubmit(e) {
        if (e.target.address && e.target.poolUrl) {
            this.setState({
                pools: e.target.poolUrl,
                address: e.target.address,
            })
        }
    }

    render() {
        return (this.state.setup ? (
            <div>
                <h3>Pool & Worker Watch</h3>
                <p>{this.state.message}</p> 
                <Form onSubmit={this.formSubmit}>
                    <Label for="poolUrl">Provide your pool domain.</Label>
                    <Input type="text" name="poolUrl" placeholder="ex: etn-us-east1.nanopool.org" />
                    <Label for="address">Provide your address for pool.</Label>
                    <Input type="text" name="address" placeholder="ex: 5exfec81f1eb..." />
                    <Button value="Submit" className="btn btn-primary" />
                </Form>
                <hr />
            </div>
        ) : (
                <div>
                    <Pool pool="" algo="etn/" address="etnjzKFU6ogESSKRZZbdqraPdcKVxEC17Cm1Xvbyy76PARQMmgrgceH4krAH6xmjKwJ3HtSAKuyFm1BBWYqtchtq9tBap8Qr4M.bbc6bcdc1e145fec81f1eb2862ccc497d83ae1b4925c2f8137ec33c9cd07003c" />
                    <hr />
                </div>
            )
        )
    };
}

export default Miner;