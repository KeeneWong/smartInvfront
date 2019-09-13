import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

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


                    <input type="submit" value="Login" />

                </form>

                {this.props.username}
                <br></br>
                {this.props.password}
                <br></br>
                {this.props.logined}

            </div>
        );
    }
}

export default Login;