import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from "react-dom";
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "../components/ui/Checkout.css";

import product from '../components/images/product.svg';
import money from '../components/images/money.svg';
import phone from '../components/images/phone.svg';
import location from '../components/images/location.svg';
import calendar from '../components/images/calendar.svg';

export class Checkout extends React.Component
{
    constructor(props)
  {
    super();
    this.state =
    {
        phone: props.testPhone,
        location: props.testAddress,
        date: props.testDate,
        time: props.testTime
    };
    }

    enterPhone(event)
    {
        this.setState({
            phone: event.target.value
        });
    }

    enterAddress(event)
    {
        this.setState({
            address: event.target.value
        });
    }

    enterDate(event)
    {
        this.setState({
            date: event.target.value
        });
    }

    enterTime(event)
    {
        this.setState({
            time: event.target.value
        });
    }

    changeHandlerP(event){
        this.setState({
            phone:event.target.value
        })
    }
    changeHandlerA(event){
        this.setState({
            address:event.target.value
        })
    }
    changeHandlerT(event){
        this.setState({
            time:event.target.value
        })
    }
    changeHandlerD(event){
        this.setState({
            date:event.target.value
        })
    }
    /*submitHandler(event){
        event.preventDefault
    }*/


    /*phoneInput= useRef();
    addressInput= useRef();
    dateInput= useRef();
    timeInput= useRef();
    
     submitHandler(event) {
        event.preventDefault();
        const enteredPhone= this.phoneInput.current.value;
        const enteredAddress= this.addressInput.current.value;
        const enteredDate= this.dateInput.current.value;
        const enteredTime= this.timeInput.current.value;
        
        const orderData={
            customerPhone:enteredPhone,
            customerAddress:enteredAddress,
            orderDate:enteredDate,
            orderTime:enteredTime,
        };

        console.log(orderData);
    }*/
    
    render()
    {
        return(
            
<div>
    

        
    <div className="checkout">Checkout </div>

    <div className="allBooks">
    <div className='inL'>
    <div className="orderBox">
    <img src={product} className="checkoutIcon" alt="Product" />
    <div className="checkoutTitle">Order Items</div>
    <div className="checkoutText">Subtotal </div>
    <div className="checkoutText">Delivery 20 EGP</div>
    </div>

    <div className="orderBox">
    <img src={money} className="checkoutIcon" alt="Money" />
    <div className="checkoutTitle">Total</div>
    <div className="checkoutText">Payment by cash on delivery</div>
    </div>
</div>
<br />

<div className='inL'> 
    <form /*onSubmit={this.submitHandler.bind(this)}*/>
    <div className="orderBox">
    <img src={phone} className="checkoutIcon" alt="Phone" />
    <div className="checkoutTitle">
        <label htmlFor='phone'>Phone Number</label>
        </div>
    <div className="checkoutText">
    <input type="number" required id='phone' value={this.state.phone} onChange={this.changeHandlerP}/>
    </div>
    </div>

    <div className="orderBox">
    <img src={location} className="checkoutIcon" alt="Location" />
    <div className="checkoutTitle">
        <label htmlFor='address'>Delivery Address</label>
        </div>
    <div className="checkoutText">
    <input type="text" required id='address'  value={this.state.location} onChange={this.changeHandlerA}/>
    </div>
    </div>
    
    <div className="orderBox">
    <img src={calendar} className="checkoutIcon" alt="Calendar" />
    <div className="checkoutTitle">
        <label htmlFor='time'>Delivery Time</label>
        </div>
    <div className="checkoutText">
        Please enter the date in this format: dd/mm/yyyy
    <input type="text" required id='time' value={this.state.date} onChange={this.changeHandlerT}/>
        Please enter the time in 24-hour format: hh:mm
    <input type="text" required  value={this.state.time} onChange={this.changeHandlerD}/>
    </div>

    </div>

    <Link to="cart">    
    <button type='button'>Back to Cart</button>
    </Link>
    <Link to="orderDone">   
    <button type='submit'>Place Order</button>
    </Link>
    </form>
   
    </div>


</div>
</div>
        );
    }
}