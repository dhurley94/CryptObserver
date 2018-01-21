import React from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup, Jumbotron } from 'reactstrap';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            formErrors: { email: '', password: '' },
            nameValid: false,
            emailValid: false,
            passwordValid: false,
            passwordMatch: false,
            formValid: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state.email, this.state.password);
        console.log(this.state.fullName, this.state.passwordConfirm);

        axios.post('http://localhost:3000/api/user/create', {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => console.error(error))
    }

    handleUserInput(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, 
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let passwordMatch = this.state.passwordConfirm;

        switch (fieldName) {
            case 'fullName': 
                nameValid = value.match > 1;
                fieldValidationErrors.fullName = nameValid ? '' : ' is invalid';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'passwordConfirm':
                passwordMatch = this.state.password === this.state.passwordConfirm;
                fieldValidationErrors.password = passwordMatch ? '' : ' do not match';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            passwordMatch: passwordMatch
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.fullName && this.state.passwordConfirm });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <Jumbotron>

                    <center><h2><u>Registration</u></h2></center>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="Email">Full Name</Label>
                        <Input type="text" name="fullName" onChange={(event) => this.handleUserInput(event)} value={this.state.fullName} id="fullName" placeholder="Enter your Full Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" onChange={(event) => this.handleUserInput(event)} value={this.state.email} id="Email" placeholder="Enter your Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" onChange={(event) => this.handleUserInput(event)} value={this.state.password} id="Password" placeholder="***********" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="PasswordConfirm">Password</Label>
                        <Input type="password" name="passwordConfirm" onChange={(event) => this.handleUserInput(event)} value={this.state.passwordConfirm} id="PasswordConfirm" placeholder="***********" />
                    </FormGroup>
                    <ButtonGroup className="ml-auto">
                        <Button className="btn btn-primary" type="reset">Reset</Button>
                        <Button disabled={!this.state.formValid} className="btn btn-primary">Submit</Button>
                    </ButtonGroup>
                </Form>
            </Jumbotron>
        );
    }
}

export default Register;