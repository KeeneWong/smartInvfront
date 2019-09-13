import React, { Component } from 'react';
import axios from "axios";
import './ItemDetail.css';

class ItemDetail extends Component {

    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    componentDidMount() {
        axios
            .get("https://herokusmartinv.herokuapp.com/items/" + this.props.match.params.itemid
                , {
                    auth: {
                        username: 'admin',
                        password: 'Linklamw0ng'
                    }
                }
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

        console.log(this.state)
        return (
            <div className="itemDetailMain">
                <div className="itemDetailTop" >
                    <div className="itemDetailTopLeft flexcolumn" >
                        <div className="itemimg"
                            style={{
                                backgroundImage: `url(${this.state.item.image_url})`
                            }}>

                        </div>

                    </div>

                    <div className="itemDetailTopRiagt">
                        <p>{this.state.item.name}</p>
                        <div><p>{this.state.item.describtion}</p></div>
                        <p>Quantity: {this.state.item.quantity}</p>
                        <p>Price: {this.state.item.prize}</p>


                    </div>

                </div>


            </div>
        );
    }
}

export default ItemDetail;