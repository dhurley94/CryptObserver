import React from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup, Jumbotron } from 'reactstrap';
// import Failed from '../Errors/Failed';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            loginFail: false,
            isAuth: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state.email, this.state.password);

        axios.post('/api/user/login', {
            email: this.state.email,
            password: this.state.password,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
        .then(result => {
            if (result.status === 200) {
                this.props.userHasAuthenticated(
                    this.setState({
                        isAuthenticated: true,
                    })
                )
                this.props.history.push('/dashboard')
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    toggleFailed() {
        this.setState({
            loginFail: false
        })
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
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <Jumbotron>
                <center><h2><u>Login</u></h2></center>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" onChange={(event) => this.handleUserInput(event)} value={this.state.email} autoComplete="Email" placeholder="Enter your Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="Password" onChange={(event) => this.handleUserInput(event)} value={this.state.password} autoComplete="current-password" placeholder="***********" />
                </FormGroup>
                <ButtonGroup className="mr-auto">
                    <Button className="btn btn-primary" type="reset">Reset</Button>
                    <Button disabled={!this.state.formValid} className="btn btn-primary">Submit</Button>
                </ButtonGroup>
            </Form>
            </Jumbotron>
        );
    }
}

export default Login;