import React, { Component } from 'react';
import './CatergoryDiv.css';
import { Link } from "react-router-dom";

class CatergoryDiv extends Component {




    render() {
        return (
            <Link to={"/catergory/" + this.props.catergory.id}>
                < div className="catergorydiv flexcolumn"
                    style={{
                        backgroundImage: `url(${this.props.catergory.image_url})`
                    }}>
                    <p>{this.props.catergory.title}</p>
                </div>
            </ Link>
        );
    }
}

export default CatergoryDiv;