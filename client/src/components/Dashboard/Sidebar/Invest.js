import React from 'react';
import axios from 'axios';
import { Row, Col, Form, Input, Label, FormGroup } from 'reactstrap';

const coinmarketcap = () => {
    try {
        axios.get('https://api.coinmarketcap.com/v1/ticker/')
            .then(results => {
                console.log(coinmarketcap)
                return results.data;
            })
    } catch (error) {
        console.error(error)
    }
}

class Invest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coinmarketcap: [],
            coin: '',
            pp_coin: 0,
            price_paid: 0,
            amount_purchase: 0,
            total_usd: 0
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.onLoad()
            .then(results => {
                this.setState({
                    coinmarketcap: results.data
                })
            })
            .then(() => {
                console.log(this.state.coinmarketcap)
            })
    }

    onLoad() {
        return axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=25')
    }

    handleChange(e) {
       this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSelectChange(e) {
        this.setState({
            coin: this.cryptoSelect.value
        })
    }

    render() {
        return (
            <Row>
                <Col md="3">
                </Col>
                <Col md="9">
                    <Form>
                        <Label for="coin">Choose Cryptocurrency from dropdown</Label>
                        <FormGroup>
                            <Label for="selectCrypto">Select</Label>
                            <Input ref={select => this.cryptoSelect = select} onChange={this.handleSelectChange} type="select" name="cryptoSelect" id="selectCrypto">
                                    <option>Choose One</option>
                                {this.state.coinmarketcap.map(coin => (
                                    <option key={coin.rank} value={coin.id}>{coin.name}</option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount">How many {this.state.coin} were purchased?</Label>
                            <Input type="text" onChange={this.handleChange} name="amount_purchased" id="amount" placeholder="00000000" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="current">How much was {this.state.coin}?</Label>
                            <Input type="text" onChange={this.handleChange} name="price_paid" id="amount" placeholder="00000000" />
                            <span className="sm-lead">Current cost; {this.state.pp_coin}</span>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Invest;