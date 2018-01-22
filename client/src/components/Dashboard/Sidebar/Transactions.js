import React from 'react';
import { Table, Row } from 'reactstrap';
import axios from 'axios';

class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coinTransactions: []
        }
    }

    componentDidMount() {
        try {
            axios.get('/api/investments/')
                .then(results => {
                    this.setState({
                        coinTransactions: results.data,
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        if (this.state.coinTransactions) {
            return (
                <Row>
                <h1>Transactions</h1>
                <Table>
                    <thead>
                        <tr>
                            <th><a href="">#</a></th>
                            <th><a href="">Coin Name</a></th>
                            <th><a href="">Amount</a></th>
                            <th><a href="">Price</a></th>
                            <th><a href="">Total</a></th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <br/>
                        <center>
                            <h4>No Transactions!</h4>
                        </center>
                    </tr>
                    </tbody>
                </Table>
                </Row>
            );
        } else {
            return (
                <Row>
                <h1>Transactions</h1>
                <Table>
                    <thead>
                        <tr>
                            <th><a href="">#</a></th>
                            <th><a href="">Coin Name</a></th>
                            <th><a href="">Amount</a></th>
                            <th><a href="">Price</a></th>
                            <th><a href="">Total</a></th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coinTransactions.map(coin => (
                            <tr>
                            <td>{coin.txid}</td>
                            <td>{coin.name}</td>
                            <td>{coin.amount_purchased}</td>
                            <td>{coin.price_usd}</td>
                            <td>{coin.price_usd * coin.amount_purchased}</td>
                            <td>{coin.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Row>
            );
        }
    }
}
export default Transactions;