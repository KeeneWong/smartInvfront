import React, { Component } from 'react';
import './CatergoryDiv.css';

class CatergoryDiv extends Component {




    render() {
        return (
            <div className="catergorydiv flexcolumn">
                <p>{this.props.catergory.title}</p>
            </div>
        );
    }
}

export default CatergoryDiv;