import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {render} from "react-dom";
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "../components/ui/Checkout.css";
import "../store/cart-context.js";
import { useContext } from 'react';
import CartContext from '../store/cart-context';


import product from '../components/images/product.svg';
import money from '../components/images/money.svg';
import phone from '../components/images/phone.svg';
import location from '../components/images/location.svg';
import calendar from '../components/images/calendar.svg';


function calculateSubtotal (buying)
{

   
var SUM =0;
  var totalSum = buying.map(product => SUM+= (parseInt(product.bookPrice) * parseInt(product.bookQuantity)));

  console.log("TOTAL SUM: ", totalSum);
  return totalSum;

}

function getSum ()
{
 const cartCtx= useContext(CartContext);
    const [cartSum, setCartSum] = useState(0);

    useEffect(() => {
      const sum = calculateSubtotal(cartCtx.buying);
      setCartSum(sum);
    },[cartCtx.buying, cartCtx.removeFromCart])
    return cartSum[cartSum.length-1];
}   


function Checkout (props) {

    
           const [phone, setPhone] = useState(props.testPhone);
           const [location, setLocation] = useState(props.testAddress);
           const [date, setDate] = useState(props.testDate);
           const [time, setTime] = useState(props.testTime);

const submitHandler = (event)=> {
    event.preventDefault();
    // alert(`Thank you for your order.
    // To confirm your order:
    // The phone number you entered is: ${phone}.
    // The delivery address you entered is: ${location}.
    // The delivery time you entered is" ${date} at ${time}.`)
    console.log("phone:", {phone}, "location:", {location}, "date:",{date}, "time:",{time})
   
}

    return(
            
        <div>
                
            <div className="checkout">Checkout </div>
        
            <div className="allBooks">
            <div className='inL'>
            <div className="orderBox">
            <img src={product} className="checkoutIcon" alt="Product" />
            <div className="checkoutTitle">Order Items</div>
            <div className="checkoutText">Subtotal {getSum()} EGP</div>
            <div className="checkoutText">Delivery 20 EGP</div>
            </div>
        
            <div className="orderBox">
            <img src={money} className="checkoutIcon" alt="Money" />
            <div className="checkoutTitle">Total: {parseInt(getSum())+parseInt(20)} EGP</div>
            <div className="checkoutText">Payment by cash on delivery</div>
            </div>
        </div>
        <br />
        
        <div className='inL'> 
            <form onSubmit={submitHandler}>
            <div className="orderBox">
            <img src={phone} className="checkoutIcon" alt="Phone" />
            <div className="checkoutTitle">
                <label>Phone Number</label>
                </div>
            <div className="checkoutText">
            <input type="number" required id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            
            </div>
            </div>
        
            <div className="orderBox">
            <img src={location} className="checkoutIcon" alt="Location" />
            <div className="checkoutTitle">
                <label >Delivery Address</label>
                </div>
            <div className="checkoutText">
            <input type="text" required id='address'  value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            </div>
            
            <div className="orderBox">
            <img src={calendar} className="checkoutIcon" alt="Calendar" />
            <div className="checkoutTitle">
                <label>Delivery Time</label>
                </div>
            <div className="checkoutText">
                Please enter the date in this format: dd/mm/yyyy
            <input type="text" required id='time' value={date} onChange={(e) => setDate(e.target.value)}/>
                Please enter the time in 24-hour format: hh:mm
            <input type="text" required  value={time} onChange={(e) => setTime(e.target.value)}/>
            </div>
        
            </div>
            </form>
            </div>

<div className="buttons">


            <button type='submit' onClick={submitHandler} className="checkoutButton">Click here to see info in console</button>
            <br/>
            <Link to="cart">    
            <button type='button' className="checkoutButton">Back to Cart</button>
            </Link>
            <Link to="orderDone">   
            <button type='submit' className="checkoutButton">Place Order</button>
            </Link>
            </div>
           

           
         
        
        
        </div>
        </div>
                );

}
export default Checkout;