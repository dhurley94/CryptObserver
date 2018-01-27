import React from 'react';
import { Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Dashboard from '../Dashboard/Dashboard';
import { Container } from 'reactstrap';
import Logout from './Logout';

class Main extends React.Component {

    render() {
        const authLogin = (props) => (
            <Login
                userHasAuthenticated={this.userHasAuthenticated}
            />
        );
        const authLogout = (props) => (
            <Logout
                userHasAuthenticated={this.userHasAuthenticated}
            />
        );
        return (
        <Container>
            <hr />
            <Route exact path="/" component={authLogin} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/logout" component={authLogout} />
            <hr />
        </Container>
        );
    }
}
export default Main;