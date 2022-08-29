import React, { useState } from 'react';
import {useRef} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

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

