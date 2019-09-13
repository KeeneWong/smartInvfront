import React, { Component } from 'react';
import EachItemDiv from '../EachItemDiv/EachItemDiv';
import './Filterview.css';
import { InputGroup, FormControl } from 'react-bootstrap';

class Filterview extends Component {
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
        let displayresult;
        if (this.props.logined === false) {
            this.props.history.push("/login");
        }

        console.log(this.props.catergorys)
        let filtereditem = this.props.items.filter(each => each.catergory == this.props.match.params.catergoryid
            && each.name.toLowerCase().includes(this.state.searchvalue))
            .map(each => <EachItemDiv key={each.id} item={each}></EachItemDiv>)
        let filtercatergory = this.props.catergorys.filter(each => each.id == this.props.match.params.catergoryid)

        return (
            <div className="filterviewMain flexcolumn">
                <h1>All {filtercatergory[0].title}</h1>
                <InputGroup size="sm" className="mb-3 searchfield">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.searchvalue} onChange={this.updatesearch} />
                </InputGroup>
                <div className="insideFilterView"> {filtereditem}</div>
            </div>
        );
    }
}

export default Filterview;