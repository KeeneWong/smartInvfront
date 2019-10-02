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
import Signup from './Signup/Signup';
import UpdateForm from './UpdateForm/UpdateForm';

class App extends Component {

  constructor() {
    super()
    this.state = {
      catergorys: [],
      items: [],
      username: 'admin',
      email: '',
      password: '',
      logined: false,
      token: '',
      userid: ''
    }
  }


  componentDidMount() {
    axios
      .get("https://herokusmartinv.herokuapp.com/catergorys/"
        , { headers: { Authorization: "Token " + this.state.token } }
      )
      .then(all => {
        this.setState({ catergorys: all.data });
        console.log("sucess load catergorys");
      })
      .catch(err => {
        console.error(err);
      });

    axios
      .get("https://herokusmartinv.herokuapp.com/useritems/" + this.state.username
        , { headers: { Authorization: "Token " + this.state.token } }
      )
      .then(all => {
        this.setState({ items: all.data });
        console.log("sucess load all items");
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateItem = () => {
    axios
      .get("https://herokusmartinv.herokuapp.com/useritems/" + this.state.username
        , { headers: { Authorization: "Token " + this.state.token } }
      )
      .then(all => {
        console.log(all)
        this.setState({ items: all.data })
        console.log("sucess update item state");
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
        // username: this.state.username,
        // password: this.state.password
        username: "admin",
        password: "Linklamw0ng"
      })
      .then(response => {
        // console.log(response)
        this.setState({ token: response.data.token })
        this.setState({ logined: true })
        this.props.history.push("/");
        this.componentDidMount()
      })
      .catch(err => {
        alert(`Invaild information`);
        console.log(err);
      });

    axios
      .get("https://herokusmartinv.herokuapp.com/users/" + this.state.username,
        { headers: { Authorization: "Token 7448b32c22ce68150b9e1de7a5f744e19d27f2d0" } })
      .then(response => {
        console.log(response.data[0].id)
        this.setState({ userid: response.data[0].id })
      })
      .catch(err => {
        alert(`Invaild information`);
        console.log(err);
        console.log(this.state.token)
      });
  }


  handleSignup = e => {
    e.preventDefault();
    axios
      .post("https://herokusmartinv.herokuapp.com/createuser/",
        {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        },
        { headers: { Authorization: "Token 7448b32c22ce68150b9e1de7a5f744e19d27f2d0" } }
      )
      .then(response => {
        console.log(response)
        alert('A user has been created')
      })
      .then(_ => {
        axios
          .post("https://herokusmartinv.herokuapp.com/api-token-auth/", {
            username: this.state.username,
            password: this.state.password
          })
          .then(response => {
            console.log(response)
            this.setState({ token: response.data.token })
            this.setState({ logined: true })
            this.props.history.push("/");
            this.componentDidMount()
          })
          .catch(err => {
            alert(`Invaild information`);
            console.log(err);
          });
      })
      .catch(err => {
        alert(`Invaild information`);
        console.log(err);
      });

    axios
      .get("https://herokusmartinv.herokuapp.com/users/" + this.state.username,
        { headers: { Authorization: "Token 7448b32c22ce68150b9e1de7a5f744e19d27f2d0" } })
      .then(response => {
        console.log(response.data[0].id)
        this.setState({ userid: response.data[0].id })
      })
      .catch(err => {
        alert(`Invaild information`);
        console.log(err);
        console.log(this.state.token)
      });
  }

  handleLogout = e => {
    this.setState({ username: '' })
    this.setState({ password: '' })
    this.setState({ logined: false })
    this.setState({ token: '' })
    this.props.history.push("/login");
  }

  render() {

    return (
      <div className="App">
        <Nav logined={this.state.logined} handleLogout={this.handleLogout}></Nav>

        <main className="mainMain flexcolumn">
          <Route
            path="/"
            exact
            render={routeProps => (
              <Home items={this.state.items} logined={this.state.logined} token={this.state.token} username={this.state.username} {...routeProps} />
            )}
          />


          <Route
            path="/stac"
            exact
            render={routeProps => (
              <Barchart {...routeProps} items={this.state.items} />
            )}

          />


          <Route
            path="/new/item"
            exact
            render={routeProps => (
              <CreateItem catergorys={this.state.catergorys} token={this.state.token} updateItem={this.updateItem} userid={this.state.userid} {...routeProps} />
            )}

          />


          <Route
            path="/catergory/:catergoryid"
            exact
            render={routeProps => (
              <Filterview items={this.state.items} logined={this.state.logined} catergorys={this.state.catergorys} {...routeProps} />
            )}

          />


          <Route
            path="/item/:itemid"
            exact
            render={routeProps => (
              <ItemDetail logined={this.state.logined} token={this.state.token} updateItem={this.updateItem} {...routeProps} />
            )}

          />

          <Route
            path="/login"
            exact
            render={routeProps => (
              <Login handleChange={this.handleChange} handleLogin={this.handleLogin} username={this.state.username} password={this.state.password} logined={this.state.logined}{...routeProps} />
            )}

          />

          <Route
            path="/signup"
            exact
            render={routeProps => (
              <Signup handleChange={this.handleChange} handleSignup={this.handleSignup} username={this.state.username} password={this.state.password} email={this.state.email} {...routeProps} />
            )}

          />

          <Route
            path="/updateitem/:itemid"
            exact
            render={routeProps => (
              <UpdateForm handleChange={this.handleChange} updateItem={this.updateItem} catergorys={this.state.catergorys} token={this.state.token} userid={this.state.userid} {...routeProps} />
            )}

          />
        </main>
      </div>
    );
  }

}

export default withRouter(App);
