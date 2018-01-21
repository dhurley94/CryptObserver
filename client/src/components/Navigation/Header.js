import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {

      isOpen: false,
      isAuthenticated: true
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout() {
    this.setState({
      isAuthenticated: false
    });
  }

  render() {
    return (    
      <div className="container-width">
        <Navbar color="dark" expand="md">
          <NavbarBrand href="/"><img height="35%"  width="35%" src="../img/logo.png" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar >
          <Nav className="ml-auto" navbar>
            <NavItem style={{ visibility: this.state.isAuthenticated ? 'visible' : 'hidden' }}>
              <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem style={{ visibility: this.state.isAuthenticated ? 'visible' : 'hidden' }}>
              <NavLink activeClassName="active" onClick={this.handleLogout} to="/login">Logout</NavLink>
            </NavItem>
            <NavItem style={{ visibility: this.state.isAuthenticated ? 'hidden' : 'visible' }}>
              <NavLink activeClassName="active" to="/login">Login</NavLink>
            </NavItem>
            <NavItem style={{ visibility: this.state.isAuthenticated ? 'hidden' : 'visible' }}>
              <NavLink activeClassName="active" to="/register">Register</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    )}
}
export default Header;
