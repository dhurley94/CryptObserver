import React from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

class Logout extends React.Component {
    constructor(props) {
        super(props)
        props.log
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
        }
    }

    logoutCallback() {
        isAuthenticated: false
    }

    componentDidMount() {
        this. onload()
            .then(results => {
                console.log(results);
            })
            .catch(error => {
                console.log(error);
            })
    }

    onLoad() {
        return axios.get('http://localhost:3000/api/user/logout')
    }

    render() {
        return (
            <Container className="container">
                <br />
                    <h3>You have now been logged out.</h3>
                <br />
            </Container>
        );
    }
}

export default Logout;