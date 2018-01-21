import React from 'react';
import axios from 'axios';
import { Row, Col, Form, Input, Label, FormGroup, Button } from 'reactstrap';

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
       this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.onLoad()
            .then(results => {
                this.setState({
                    coinmarketcap: results.data
                })
            })
    }

    onLoad() {
        return axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=25')
    }
    
    handleSubmission(e) {
        e.preventDefault();
        
        // Parse to json and save in mysql
    }

    handleSelectChange(e) {
        this.setState({
            coin: e.target.value
        });
        this.state.coinmarketcap.forEach(coin => {
            if (coin.name === this.state.name) {
                this.setState({
                    pp_coin: coin.price_usd,
                })
            }
        })
    };

    render() {
        return (
            <Row>
                <Col md="3">
                </Col>
                <Col md="9">
                    <Form onSubmit={this.handleSubmission}>
                        <Label for="coin">Choose Cryptocurrency from dropdown</Label>
                        <FormGroup>
                            <Label for="selectCrypto">Select</Label>
                            <Input defaultValue={this.state.selectValue} onChange={this.handleSelectChange} type="select" name="cryptoSelect" id="selectCrypto">
                                    {this.state.coinmarketcap.map(coin => (
                                        <option key={coin.rank} value={coin.name}>{coin.name}</option>
                                    ))}                     
                                </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount">How many {this.state.coin} were purchased?</Label>
                            <Input type="text" name="amount" id="amount" placeholder="00000000" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="current">{this.state.coin}, is currently worth ${this.state.pp_coin}?</Label>
                            <Input type="text" onChane={this.handleChange} name="amount" id="amount" placeholder="00000000" />
                            <span className="sm-lead">Current cost; {this.state.pp_coin * }</span>
                        </FormGroup>price
                        <Button color="primary" type="reset">Reset</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button color="primary" type="submit">Save</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Invest;