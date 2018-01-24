import React from 'react';
import axios from 'axios';
import { Row, Col, Form, Input, Label, FormGroup, Button, Table } from 'reactstrap';

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
            coinTransactions: []
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
        axios.get('/api/investments')
        .then(results => {this.setState({ coinTransactions: results })})
        .catch(error => console.log(error))
    }

    onLoad() {
        return axios.get('https://api.coinmarketcap.com/v1/ticker/')
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.post('/api/investments/add', {
            coin: this.state.coin,
            pp_coin: this.state.pp_coin,
            amount_purchased: this.state.amount_purchased,
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
                            <Input type="text" onChange={this.handleChange} name="amount_purchased" id="amount" placeholder="00000000" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="current">How much was each {this.state.coin}?</Label>
                            <Input type="text" onChange={this.handleChange} name="pp_coin" id="amount" placeholder="00000000" />
                        </FormGroup>
                        <span className="sm-lead">Your cost ${this.state.pp_coin * this.state.amount_purchased} </span> | 
                         <span className="sm-lead"> Current Market cost ${this.state.pp_coin * this.state.amount_purchased}</span>
                        <hr />
                        <Button type="submit">Save</Button>
                    </Form>
                </Col>
                <Col md="6" sm="12">
                    <Table>
                    <thead>
                    <tr>
                        <th>Recent Additions</th>
                        <th>Coin</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    </Table>
                    <hr />
                </Col>
            </Row>
        )
    }
}

export default Invest;