import React, { Component } from 'react';
import '../SearchDiv/SearchDiv.css';
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';

class SearchDiv extends Component {

    constructor() {
        super();
        this.state = {
            searchvalue: "",
            result: ""
        };
    }

    updatesearch = e => {
        this.setState({ searchvalue: e.target.value });
    };

    render() {
        let allitems = this.props.items.filter(each => {
            return each.name.toLowerCase().includes(this.state.searchvalue)
        }).map(each => {
            return <Link to={"/item/" + each.id}>
                <div className="eachitemqs">
                    <p>{each.name}</p>
                </div>
            </Link>
        })

        // let allitems = newarray
        return (
            <div className="searchDivMain flexcolumn">
                <h3 className="itemsearchh3">Item Search</h3>
                <div><InputGroup size="sm" className="mb-3 searchfield">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.searchvalue} onChange={this.updatesearch} />
                </InputGroup></div>


                <div className="items flexcolumn">
                    {allitems}
                </div>
            </div>
        );
    }
}

export default SearchDiv;