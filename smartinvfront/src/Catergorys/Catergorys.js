import React, { Component } from 'react';
import axios from "axios";
import CatergoryDiv from '../CatergoryDiv/CatergoryDiv';
import './Catergorys.css';

class Catergorys extends Component {

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
        let allctaergorydiv = this.state.catergorys.map(each => {
            console.log(each)
            return <CatergoryDiv key={each.id} catergory={each}></CatergoryDiv>;
        })

        return (
            <div className="catergorysmain">
                {allctaergorydiv}
            </div>
        );
    }
}

export default Catergorys;