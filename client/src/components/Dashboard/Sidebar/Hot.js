import React from 'react';
import { Container, Table } from 'reactstrap';
import HotCoin from "./HotCoin";
import axios from 'axios';

class Hot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coinmarketcap: []
        }
    }

    componentDidMount() { // https://api.nanopool.org/v1/ etn
        try {
            axios.get('https://api.coinmarketcap.com/v1/ticker/')
                .then(results => {
                    this.setState({
                        coinmarketcap: results,
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <Row>
                <Table>
                <thead>
                       <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change over 24hr</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.coinmarketcap.map(coin => {
                        <tr>
                            <td><{coin.rank}</td>
                            <td>{coin.name}</td>
                            <td> {coin.price_usd}/tdw>
                            <td> {coin.percent_change_24h} </td>
                        </tr>
                    })}
                </tbody>
            git commit
            </Row>
        )
    }
}

export default Hot;