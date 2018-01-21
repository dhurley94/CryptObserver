import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import Header from './components/Navigation/Header';
import Main from './components/Main/Main';
import Feet from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.isAuth = this.isAuth.bind(this);
  }
  
  logoutAuthCallback = (DataFromLogout) => {
    if (DataFromLogout) {
      this.setState({
        isAuth: false
      })
    }
  }

  userHasAuthenticated = props => {
    this.setState({ isAuthenticated: props.isAuthenticated });
  }
  isAuth = props => {
    return this.state.isAuthenticated
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header logoutAuthCallback={this.logoutAuthCallback}  handleLogout={this.handleLogout} isAuth={this.isAuth} />
            <Main userHasAuthenticated={this.userHasAuthenticated} />
            <Feet />
        </div>
      </Router>
    );
  }
}

export default App;
