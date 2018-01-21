import React from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

class Logout extends React.Component {
    constructor(props) {
        super(props)
        props.logoutCallback = this.props.logoutCallback.bind(this)
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
        }
    }

    logoutCallback() {
        this.setState({
            isAuthenticated: false
        })
    }

    componentDidMount() {
        this.onload()
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