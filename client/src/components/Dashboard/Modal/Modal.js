
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label, FormGroup } from 'reactstrap';
import axios from 'axios';

class ModalTransaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false,
            amount_purchased: props.amount_purchased,
            pp_coin: props.pp_coin,
        };

        this.toggle = this.toggle.bind(this);
        this.process = this.process.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    process(e) {
        e.preventDefault();
        if (this.props.update) {
            axios.post(this.props.route, {
                pp_coin: this.state.pp_coin,
                amount_purchased: this.state.amount_purchased,
                txid: this.props.txid
            })
            .then(results => console.log(results))
            .catch(error => console.log(error))
        } else {
            axios.post(this.props.route, {
                txid: this.props.txid
            })
            .then(results => console.log(results))
            .catch(error => console.log(error))
        }

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        let form;

        if (this.props.update) {
            form = (
            <FormGroup>
                <Input disabled type="text" value={this.props.coin} />
                <Label for="amount_purchased">How many were purchased? - </Label>
                <Input onChange={this.handleChange} type="text" name="amount_purchased" value={this.state.amount_purchased} />
                <Label for="pp_coin">Price per coin? - </Label>
                <Input onChange={this.handleChange} type="text" name="pp_coin" value={this.state.pp_coin} />
            </FormGroup>)
        } else {
            form = (
            <FormGroup>
                <Input disabled type="text" value={this.props.coin} />
            </FormGroup>)
        }

        return (
            <div>
                <Button color={this.props.color} onClick={this.toggle}>{this.props.icon}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.message + this.props.coin}</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.process}>
                            {form}
                            <hr />
                            <FormGroup><Button type="submit" color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button><hr /><p>Make sure you refresh the page after making changes.</p></FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalTransaction;