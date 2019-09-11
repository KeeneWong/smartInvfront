import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Home from './Home/Home';
import CanvasJSReact from './Barchart/canvasjs.react';
import Nav from './Nav/Nav';
import axios from "axios";
import Barchart from './Barchart/Barchart';
import CreateItem from './CreateItem/CreateItem';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {

  constructor() {
    super()
    this.state = {
      catergorys: []
    }
  }


  componentDidMount() {
    axios
      .get("https://herokusmartinv.herokuapp.com/catergorys/")
      .then(all => {
        this.setState({ catergorys: all.data });
        console.log(all.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>

        <main className="mainMain flexcolumn">
          <Route
            path="/"
            exact
            render={routeProps => (
              <Home {...routeProps} />
            )}
          />


          <Route
            path="/stac"
            exact
            render={routeProps => (
              <Barchart {...routeProps} />
            )}

          />


          <Route
            path="/new/item"
            exact
            render={routeProps => (
              <CreateItem catergorys={this.state.catergorys} {...routeProps} />
            )}

          />
        </main>
      </div>
    );
  }

}

export default App;
