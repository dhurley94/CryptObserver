import React from 'react';
import { Table, Row, ButtonGroup } from 'reactstrap';
import axios from 'axios';
import ModalTransaction from '../Modal/Modal';
import { setInterval } from 'timers';

class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coinTransactions: [],
            transactions: false,
            intervalId:1000
        }
    }

    onCoinChange() {
        try {
            axios.get('/api/investments')
                .then(results => {
                    this.setState({
                        coinTransactions: results.data,
                        transactions: true
                    })
                })
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    }

    componentDidMount() {
        try {
            axios.get('/api/investments')
                .then(results => {
                    this.setState({
                        coinTransactions: results.data,
                        transactions: true
                    })
                })
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        if (this.state.coinTransactions.length === 0) {
            return (
                <Row>
                <h1>Transactions</h1>
                <Table>
                    <thead>
                        <tr>
                            <th><a href="#">#</a></th>
                            <th><a href="#">Coin Name</a></th>
                            <th><a href="#">Amount</a></th>
                            <th><a href="#">Price</a></th>
                            <th><a href="#">Total</a></th>
                            <th>Date</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td><h4>No Transactions!</h4></td>
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
                            <th><a href="#">#</a></th>
                            <th><a href="#">Coin Name</a></th>
                            <th><a href="#">Amount</a></th>
                            <th><a href="#">Price</a></th>
                            <th><a href="#">Total</a></th>
                            <th>Date Purchased</th>
                            <th> - / + </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coinTransactions.map(coin => (
                            <tr key={coin.txid}>
                                <td>{coin.txid}</td>
                                <td>{coin.coin}</td>
                                <td>{coin.amount_purchased}</td>
                                <td>${coin.pp_coin}</td>
                                <td>${coin.pp_coin * coin.amount_purchased}</td>
                                <td>{coin.createdAt}</td>
                                <td>
                                    <ButtonGroup>
                                            <ModalTransaction icon={<span className="glyphicon">&#x270f;</span>} update={true} amount_purchased={coin.amount_purchased} pp_coin={coin.pp_coin} color="primary" buttonLabel="Update" message="You are about to update "  coin={coin.coin} txid={coin.txid} route="/api/investments/update" />
                                            &nbsp;
                                            <ModalTransaction icon={<span className="glyphicon">&#xe014;</span>} color="danger" buttonLabel="Delete" message='You are about to delete ' coin={coin.coin} txid={coin.txid} route="/api/investments/del" />
                                    </ButtonGroup>
                                </td>
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