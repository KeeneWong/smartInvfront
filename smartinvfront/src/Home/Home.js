import React, { Component } from 'react';
import SearchDiv from '../SearchDiv/SearchDiv';
import ItemContainer from '../ItemContainer/ItemContainer';
import Barchart from '../Barchart/Barchart';
import Welcome from '../Welcome/Welcome';

class Home extends Component {
    render() {
        return (
            <div className="homeMain flexrow test">
                <Welcome></Welcome>
                <ItemContainer></ItemContainer>

            </div>
        );
    }
}

export default Home;