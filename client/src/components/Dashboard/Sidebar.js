import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = props => 
        <Nav vertical>
            <NavItem className="sideBtn">
                <NavLink activeClassName="active" to="/dashboard/invest">Investments</NavLink>
            </NavItem>
            <NavItem className="sideBtn">
                <NavLink activeClassName="active" to="/dashboard/transactions">Transactions</NavLink>
            </NavItem>
            <NavItem className="sideBtn">
                <NavLink activeClassName="active" to="/dashboard/miners">Pools & Workers</NavLink>
            </NavItem>
            <NavItem className="sideBtn">
                <NavLink activeClassName="active" to="/dashboard/hot">Hottest Cryptos</NavLink>
            </NavItem>
        </Nav>

export default Sidebar;