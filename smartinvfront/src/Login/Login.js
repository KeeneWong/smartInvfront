import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../Login/Login.css';

class Login extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="loginMain">
                <form className="createitemform flexcolumn" onSubmit={this.props.handleLogin}>

                    <h1>Login</h1>

                    <InputGroup className="mb-3 itemvalue">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Username</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="username"
                            aria-label="username"
                            aria-describedby="basic-addon1 inputGroup-sizing-default"
                            value={this.props.username} name="username" onChange={this.props.handleChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3 itemvalue">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Password</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="basic-addon1 inputGroup-sizing-default"
                            value={this.props.password} name="password" onChange={this.props.handleChange}
                        />
                    </InputGroup>

                    <br />
                    <div className="loginsignup flexrow">
                        <Link to="/signup"><Button variant="outline-dark">Sigup</Button></Link>
                        <Button type="submit" value="Login" variant="dark">Login</Button>


                    </div>




                </form>

            </div>
        );
    }
}

export default Login;