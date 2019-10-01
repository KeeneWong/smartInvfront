import React, { Component } from 'react';
import '../SearchDiv/SearchDiv.css';
import { Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';

class SearchDiv extends Component {
    render() {
        return (
            <div className="searchDivMain flexcolumn">
                <h3 className="itemsearchh3">Item Search</h3>

                <InputGroup size="sm" className="mb-3 searchfield">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </div>
        );
    }
}

export default SearchDiv;