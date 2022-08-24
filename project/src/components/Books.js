import BookItem from "./bookItem";
//import { BookItem } from "../pages/BookItem.js";
import { useState, useEffect } from "react";
import {getBooks} from "../BookService.js";
import React from "react";
import axios from "axios";

function Books(props) {

    const url = 'http://localhost:8080/api/bookstore/images/';


    const [data, setData] = useState(null);
        useEffect(() => {
            axios.get(url)
              .then((response) => response.data)
              .then(setData);
          }, []);
          if (data) {
            /*return (
              <div>
                <ul>
                    {data.map(
                        item => <li key={item.id}>
                          <p>{item.bookTitle}</p>
                          </li>
                    )}
                </ul>
              </div>
            );*/
            return( 
            <div>
                {data.map(book =>  
                <BookItem 
                key={book.id} 
                id= {book.id}
                image={book.image.data} 
                title={book.bookTitle}
                genre={book.bookGenre}
                price={book.bookPrice}
                addtoTotal = {props.addtoTotal} />
                )}
            </div>);
          }
}

export default Books;