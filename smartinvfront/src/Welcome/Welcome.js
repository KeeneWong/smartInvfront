import React, { Component } from 'react';
import SearchDiv from '../SearchDiv/SearchDiv';
import './Welcome.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class Welcome extends Component {
    render() {
        return (
            <div className="welcomeMain flexcolumn">
                <div className="welcome">
                    <h1 id="hi">{this.props.username} <span id="welcome">welcome back </span></h1>
                </div>
                <div className="itemCount flexrow">
                    <div className="invemtoryimg"></div>


                    <div className="insideItemCount flexcolumn">
                        <h2>Item Count : {this.props.items.length}</h2>
                        <Link to="/new/item" className="headergrid1">
                            <Button variant="outline-success">New Item</Button>
                        </Link>

                    </div>

                </div>
                <SearchDiv></SearchDiv>

            </div>
        );
    }
}

export default Welcome;