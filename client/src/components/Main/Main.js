import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Dashboard from '../Dashboard/Dashboard';
import { Container } from 'reactstrap';
import Logout from './Logout';

class Main extends React.Component {

    render() {
        const MyLogin = (props) => (
            <Login
                userHasAuthenticated={this.userHasAuthenticated}
                {...props}
            />
        );
        return (
        <Container>
            <hr />
            <Redirect from="/" to="/login" />
            <Route path="/login" component={MyLogin} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/logout" component={Logout} />
            <hr />
        </Container>
        );
    }
}
export default Main;