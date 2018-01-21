import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import './Modal.css';

class ModalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinmarketcap: [],
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
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

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal fade={false} isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-lg">
                    <ModalHeader toggle={this.toggle}>Top 100 Today!</ModalHeader>
                    <ModalBody>
                    {this.state.coinmarketcap.map(coin => (
                        <div className="btnList" key={coin.rank}>
                        <Button className="btn-xs primary" value={coin.name} onClick={this.toggleNested}>{coin.symbol}</Button>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} fade={false} backdrop={false} onClosed={this.state.toggleNested ? this.toggle : undefined}>
                                <ModalHeader>{ "#" + coin.rank + " " +coin.name }</ModalHeader>
                                <ModalBody>{ "$" + coin.price_usd + ", Change 24hr " + coin.percent_change_24h }</ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={this.toggleNested}>X</Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </div>
                    ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalList;