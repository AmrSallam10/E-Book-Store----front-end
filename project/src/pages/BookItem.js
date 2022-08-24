import React from 'react';
import {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import ruins from "../components/images/ruins.png";
import knife from "../components/images/knife.png";
import Books from "../components/Books.js";
import "../components/ui/Home.css";
//import { getBooks } from '../BookService';

// import NavBar from "../NavBar/NavBar";
// import BookList from "../Books/BookList";

export class BookItem extends React.Component
{
    constructor(props)
  {
    super();
    this.state =
    {
        
        quantity: 0,
        title: props.title,
        image: props.image,
        price: props.price,
        genre: props.genre,
        addtoTotal: props.addtoTotal
    };
    }
    onChange(event)
    {
        this.setState({
            quantity: event.target.value
        });
    }
   

    // addToCartClicked(event, ruinsQuanity, knifeQuantity)
    // {


    //      this.props.addtoTotal();

    // }

    render()
    {
        /*console.log("RUINS");
        console.log(this.state.ruinsQuanity);
        console.log("KNIFE");
        console.log(this.state.knifeQuantity);
        console.log("TOTAL QUANTITY");
        console.log(this.state.totalQuantity);
        console.log("ADDITION");*/

    
    return (
        <div>



        <div className="allBooks">

            <div className="imageContainer">
            <img src={"data:image/png;base64, "+this.state.image} className="image" alt={this.state.title} />
            <div className="bookTitle">{this.state.title}</div>
            <div className="bookGenre">{this.state.genre}</div>
            <div className="egp">EGP</div>
            <div className="price">{this.state.price}</div>
            <br/>
            <div className="quantity">Quantity</div>
            <input type="number" value={this.state.quantity} onChange={this.onChange.bind(this)}/>
            <br/>
            <button className="addToCartButton" onClick={this.state.addtoTotal(this.state.quantity)} >Add to Cart</button>
            </div>

        </div> 

        </div>
            );
    }
}

BookItem.propTypes=
{
    title: PropTypes.string,
    genre: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    addtoTotal: PropTypes.func
};