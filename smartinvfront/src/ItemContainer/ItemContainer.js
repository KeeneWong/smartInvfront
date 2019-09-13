import React, { Component } from 'react';
import './ItemContainer.css';
import CatergoryDiv from '../CatergoryDiv/CatergoryDiv';
import Catergorys from '../Catergorys/Catergorys';

class ItemContainer extends Component {
    render() {
        return (
            <div className="itemcontainermain">
                <Catergorys token={this.props.token}></Catergorys>

            </div>
        );
    }
}

export default ItemContainer;