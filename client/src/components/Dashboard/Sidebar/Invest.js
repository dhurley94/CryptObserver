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
            coin: 'Choose Coin',
            pp_coin: 0,
            price_paid: 0,
            amount_purchased: 0,
            flashToggle: false,
            flashMessage: '',
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
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


    handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:3001/api/investments/add', {
            coin: this.state.coin,
            pp_coin: this.state.pp_coin,
            amount_purchase: this.state.amount_purchase,
            price_paid: this.state.price_paid,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(result => {
                if (result.status === 200) {
                    this.setState({
                        flashMessage: 'New Investment Added'
                    })
                }
                setTimeout(() => {
                    this.handleToggle()
                }, 1500)
            })
            .catch(error => {
                console.error(error)
            })
    }

    handleToggle() {
        this.setState({
            flashMessage: true,
        })
    }

    handleChange(e) {
       this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSelectChange(e) {
        this.setState({
            coin: e.target.value
        })
    }

    render() {
        return (
            <Row>
                <br />
                <Col md="6" sm="12">
                    <h2>Add Invesment</h2>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <Label for="coin">Choose Cryptocurrency from dropdown</Label>
                        <FormGroup>
                            <Label for="selectCrypto">Select</Label>
                            <Input onChange={this.handleSelectChange} type="select" value={this.state.coin} name="cryptoSelect" id="selectCrypto">
                                {this.state.coinmarketcap.map(coin => (
                                    <option key={coin.rank}>{coin.name}</option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount">How many {this.state.coin} were purchased?</Label>
                            <Input type="number" onChange={this.handleChange} name="amount_purchased" id="amount" placeholder="00000000" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="current">How much was each {this.state.coin}?</Label>
                            <Input type="number" onChange={this.handleChange} name="pp_coin" id="amount" placeholder="00000000" />
                            <span className="sm-lead">Current cost; {this.state.pp_coin * this.state.amount_purchased}</span>
                        </FormGroup>
                        <Button type="submit">Save</Button>
                    </Form>
                </Col>
                <Col md="6" sm="12">
                    <h2>Recent Additions</h2>
                    <hr />
                </Col>
            </Row>
        )
    }
}

export default Invest;