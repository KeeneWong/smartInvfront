import React, { Component } from 'react';
import './UpdateForm.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import axios from "axios";

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            describtion: '',
            catergory: 1,
            quantity: 1,
            image_url: "",
            prize: 0,
            alive: true,
            user: 1
        };
    }


    componentDidMount() {
        axios
            .get("https://herokusmartinv.herokuapp.com/items/" + this.props.match.params.itemid
                , { headers: { Authorization: "Token " + this.props.token } }
            )
            .then(all => {
                this.setState({ item: all.data });
                // console.log("sucess load item", all);
            })
            .catch(err => {
                console.error(err);
            });

    }


    render() {
        let options = this.props.catergorys.map(each => {
            return <option key={each.id} value={each.id}>{each.title}</option>
        })
        return (
            <div>
                <form className="createitemform flexcolumn" onSubmit={this.handleSubmit}>

                    <h1>Update Item</h1>

                    <InputGroup className="mb-3 itemvalue">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Item Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Itemname"
                            aria-label="Itemname"
                            aria-describedby="basic-addon1 inputGroup-sizing-default"
                            value={this.state.name} name="name" onChange={this.handleChange}
                        />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Describtion</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" value={this.state.describtion} name="describtion" onChange={this.handleChange} />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Quantity</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="1"
                            aria-label="quantity"
                            aria-describedby="basic-addon1 inputGroup-sizing-default"
                            value={this.state.quantity} name="quantity" onChange={this.handleChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Image_url</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="image_url"
                            aria-label="image_url"
                            aria-describedby="basic-addon1 inputGroup-sizing-default"
                            value={this.state.image_url} name="image_url" onChange={this.handleChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Prize  $</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="prize"
                            aria-label="prize"
                            aria-describedby="basic-addon1 inputGroup-sizing-default"
                            value={this.state.prize} name="prize" onChange={this.handleChange}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1 inputGroup-sizing-default">Catergory</InputGroup.Text>
                        </InputGroup.Prepend>
                        <select value={this.state.catergory} name="catergory" onChange={this.handleChange}>
                            {options}
                        </select>
                    </InputGroup>

                    <br />

                    <label>
                        Alive:
<input name="alive" type="checkbox" checked={this.state.alive} onChange={this.handleChange} />
                    </label>

                    <br />


                    <input type="submit" value="Submit" />

                    <br />
                </form>

            </div>
        );
    }
}

export default UpdateForm;