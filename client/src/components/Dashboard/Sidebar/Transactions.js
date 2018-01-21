import React from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coinmarketcap: []
        }
    }

    componentDidMount() {
        try {
            axios.get('https://api.coinmarketcap.com/v1/ticker/')
                .then(results => {
                    this.setState({
                        coinmarketcap: results.data,
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
              return(  <Table>
                    <thead>
                        <tr>
                            <th><a href="">#</a></th>
                            <th><a href="">Coin Name</a></th>
                            <th><a href="">USD Price</a></th>
                            <th><a href="">Top 24hr Gains</a></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.coinmarketcap.map(coin => (
                        <tr>
                            <td key={coin.id}>{coin.rank}</td>
                            <td key={coin.id}>{coin.name}</td>
                            <td key={coin.id}>${coin.price_usd}</td>
                            <td key={coin.id}>{coin.percent_change_24h}%</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                )
            }
    }

export default Transactions;