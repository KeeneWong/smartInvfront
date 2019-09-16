import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Signup extends Component {
    render() {
        return (
            <div>
                <form className="createitemform flexcolumn" onSubmit={this.props.handleSignup}>

                    <h1>Signn Up</h1>

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
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="basic-addon1 inputGroup-sizing-default"
                            value={this.props.email} name="email" onChange={this.props.handleChange}
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

                    <Button type="submit" value="Signup" variant="dark">Signup</Button>


                </form>

            </div>
        );
    }
}

export default Signup;