import React, { Component } from 'react';
import ItemContainer from '../ItemContainer/ItemContainer';
import Welcome from '../Welcome/Welcome';

class Home extends Component {
    render() {
        if (this.props.logined === false) {
            this.props.history.push("/login");
        }
        return (
            <div className="homeMain flexrow test">
                <Welcome items={this.props.items}></Welcome>
                <ItemContainer token={this.props.token}></ItemContainer>

            </div>
        );
    }
}

export default Home;