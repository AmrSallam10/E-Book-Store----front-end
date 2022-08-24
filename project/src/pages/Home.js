import React, { useState } from 'react';
import {useRef} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import ruins from "../components/images/ruins.png";
import knife from "../components/images/knife.png";
import Books from "../components/Books.js";
import "../components/ui/Home.css";
//import { getBooks } from '../BookService';

// import NavBar from "../NavBar/NavBar";
// import BookList from "../Books/BookList";

export function Home() {
    const [totalQuantity, setTotalQuantity] = useState(0);
    
    function handleTotalQuantityChange(evt, quantity) {
        setTotalQuantity(totalQuantity+quantity);
    }

    console.log(totalQuantity);
    /*useEffect(() => {
        axios.get(url)
          .then((response) => response.data)
          .then(setData);
      }, []);*/

    return (
        <div>

        <div>
        <h2>All Books</h2>
        <p>THIS IS THE TOTAL QUANTITY: {totalQuantity}</p>
         <Books addtoTotal={handleTotalQuantityChange} />
        </div>

        </div>
    );
}

// /*export class Home extends React.Component
// {
//     constructor(props)
//   {
//     super();
//     this.state =
//     {
//         totalQuantity: 0,
//     };
//     }


//     onChange(event)
//     {
//         this.setState({
//             quantity: event.target.value
//         });
//     }


//     addtoTotal(quantity, event) {
//         console.log("hi");
//         /*this.setState({
//             totalQuantity: totalQuantity+quantity
//         });*/
//     }

//     // addToCartClicked(event, ruinsQuanity, knifeQuantity)
//     // {
//     //     this.setState({
//     //     // totalQuantity: this.state.totalQuantity + this.state.ruinsQuanity + this.state.knifeQuantity
//     //     totalQuantity: parseInt(this.state.ruinsQuanity) + parseInt(this.state.knifeQuantity)
//     //     //Change go to cart color
//     //      });

//     // }

//     render()
//     {

    
//     return (
//         <div>

//         <div>
//         <h2>All Books</h2>
//         <p>THIS IS THE TOTAL QUANTITY: {this.state.totalQuantity}</p>
//          <Books addtoTotal={this.addtoTotal} change={this.onChange} />
//         </div>

//         </div>
//             );
//     }
// }

// Home.propTypes=
// {
//     initialTotal: PropTypes.number,
// };*/