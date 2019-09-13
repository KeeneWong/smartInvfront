import React, { Component } from 'react';
import './EachItemDiv.css';
import { Link } from "react-router-dom";

class EachItemDiv extends Component {
    render() {
        return (
            <Link to={"/item/" + this.props.item.id}>
                <div className="eachitemdivMain flexcolumn">
                    <p>{this.props.item.name}</p>
                    <p>{this.props.item.describtion}</p>
                    {/* <p>{this.props.item.name}</p>
                <p>{this.props.item.name}</p> */}

                </div>
            </Link>

        );
    }
}

export default EachItemDiv;