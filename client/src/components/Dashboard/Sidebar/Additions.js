import React from 'react';
import axios from 'axios';

class Additions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { coinTransactions: [], currentCoinCost: 0 }
    }

    componentDidMount() {
        axios.get('/api/investments')
            .then(results => { 
                this.setState({ 
                    coinTransactions: results.data 
                })
            })
    }



    render() {

        let tmpCoin;

        // Calculate diff between paid vs current market
        priceDiff: (coin) => {
            this.props.marketData.forEach(data => {
                if (coin === data.name) {
                    tmpCoin = data.price_usd
                }
            })
        }
        
        return (
            <tbody>
            {this.state.coinTransactions.map(coins => (
                <tr key={coins.txid} >
                    <td>{coins.txid}</td>
                    <td>{coins.coin}</td>
                    <td>${coins.pp_coin}</td>
                    <td>N/A</td>
                </tr>
            ))}
            </tbody>
        )
    }
}

export default Additions;