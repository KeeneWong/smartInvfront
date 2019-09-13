import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './Home/Home';
import CanvasJSReact from './Barchart/canvasjs.react';
import Nav from './Nav/Nav';
import axios from "axios";
import Barchart from './Barchart/Barchart';
import CreateItem from './CreateItem/CreateItem';
import Filterview from './Filterview/Filterview';
import ItemDetail from './ItemDetail/ItemDetail';
import Login from './Login/Login';

class App extends Component {

  constructor() {
    super()
    this.state = {
      catergorys: [],
      items: [],
      username: '',
      password: '',
      logined: false,
      token: ''
    }
  }


  componentDidMount() {
    axios
      .get("https://herokusmartinv.herokuapp.com/catergorys/"
        , {
          auth: {
            username: 'admin',
            password: 'Linklamw0ng'
          }
        }
      )
      .then(all => {
        this.setState({ catergorys: all.data });
        console.log("sucess load catergorys");
      })
      .catch(err => {
        console.error(err);
      });

    axios
      .get("https://herokusmartinv.herokuapp.com/items/"
        , {
          auth: {
            username: 'admin',
            password: 'Linklamw0ng'
          }
        }
      )
      .then(all => {
        this.setState({ items: all.data });
        console.log("sucess load all items");
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleChange = (event) => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLogin = e => {
    e.preventDefault();
    axios
      .post("https://herokusmartinv.herokuapp.com/api-token-auth/", {
        username: "admin",
        password: "Linklamw0ng"
      })
      .then(response => {
        console.log(response)
        this.setState({ token: response.data.token })
        this.setState({ logined: true })
        this.props.history.push("/");
      })
      .catch(err => {
        alert(`Invaild information`);
        console.log(err);
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
              <Home items={this.state.items} logined={this.state.logined} token={this.state.token} {...routeProps} />
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


          <Route
            path="/catergory/:catergoryid"
            exact
            render={routeProps => (
              <Filterview items={this.state.items} catergorys={this.state.catergorys} {...routeProps} />
            )}

          />


          <Route
            path="/item/:itemid"
            exact
            render={routeProps => (
              <ItemDetail {...routeProps} />
            )}

          />

          <Route
            path="/login"
            exact
            render={routeProps => (
              <Login handleChange={this.handleChange} handleLogin={this.handleLogin} username={this.state.username} password={this.state.password} logined={this.state.logined}{...routeProps} />
            )}

          />
        </main>
      </div>
    );
  }

}

export default withRouter(App);
