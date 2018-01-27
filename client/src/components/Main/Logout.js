import React from 'react';
import { Container } from 'reactstrap';

class Logout extends React.Component {

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