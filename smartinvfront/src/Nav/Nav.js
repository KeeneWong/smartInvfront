import React, { Component } from 'react';
import '../App.css';
import './Nav.css';
import { Route, Link } from "react-router-dom";

class Nav extends Component {
    render() {
        if (this.props.logined === true) {
            return (
                <header className="App-header">
                    <Link to="/" className="headergrid1">
                        <p>SmartInv</p>
                    </Link>
                    <Link to="/stac" className="headergrid5">
                        <p>Stactistic</p>
                    </Link>
                    <p id="logoutbtton" onClick={this.props.handleLogout}>Logout</p>
                </header>
            );
        }

        else {
            return (
                <header className="App-header">
                    <Link to="/" className="headergrid1">
                        <p>SmartInv</p>
                    </Link>
                    <Link to="/login" className="headergrid6">
                        <p>Login</p>
                    </Link>
                </header>
            );
        }
    }

}

export default Nav;