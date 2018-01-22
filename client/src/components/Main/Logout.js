import React from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

class Logout extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.userHasAuthenticated(
            this.setState({
                isAuthenticated: false,
            })
        )
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