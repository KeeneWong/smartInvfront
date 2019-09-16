import React, { Component } from 'react';
import axios from "axios";
import './ItemDetail.css';
import { Button } from 'react-bootstrap';

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

    handleDelete = (event) => {
        event.preventDefault();
        axios
            .delete("https://herokusmartinv.herokuapp.com/items/" + this.state.item.id, { headers: { Authorization: "Token " + this.props.token } })
            .then(response => {
                console.log(response)
                alert("An Item has been deleted")
                this.props.history.push("/");
                this.props.updateItem();
            })
            .catch(err => {
                alert(`Invaild information`);
                console.log(err);
            });
    }


    render() {
        if (this.props.logined === false) {
            this.props.history.push("/login");
        }

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
                        <div><p>Describtion: <br></br>{this.state.item.describtion}</p></div>
                        <p>Quantity: {this.state.item.quantity}</p>
                        <p>Price: {this.state.item.prize}</p>
                        <div className="itemDetailBottom flexrow" >

                            <Button variant="outline-success" onClick={this.handleUpdate}>Update</Button>
                            <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>


                        </div>


                    </div>

                </div>




            </div>
        );
    }
}

export default ItemDetail;