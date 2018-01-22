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
            axios.get('http://localhost:3001/api/investments/')
                .then(results => {
                    // this.setState({
                    //     coinmarketcap: results.data,
                    // })
                    console.log(results)
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
                            <th><a href="">Amount</a></th>
                            <th><a href="">Price</a></th>
                            <th><a href="">Total</a></th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.coinmarketcap.map(coin => (
                        <tr>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                )
            }
    }

export default Transactions;