import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
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
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <Router>
        <div className="App">
            <Header />
            <Main authProps={authProps} />
            <Feet />
        </div>
      </Router>
    );
  }
}

export default App;
