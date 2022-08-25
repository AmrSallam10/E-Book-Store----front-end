

import { useHistory } from 'react-router-dom';
import Books from '../components/Books';
import CartItem from '../components/CartItem';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../components/ui/Cart.css";
import CartContext from '../store/cart-context';

function Carts(props)
{
    return (
            <div>
              {props.books.buying.map((book) => (
                <CartItem
                  key={book.id}
                  id={book.id}
                  image={book.image.data}
                  title={book.bookTitle}
                  genre={book.bookGenre}
                  price={book.bookPrice}
                  quantity = {book.bookQuantity}
                />
              ))}
            </div>
          );
}





function CartPage() {
    const cartCtx= useContext(CartContext);
    console.log(cartCtx.buying);
    let content;
    if (cartCtx.totalBuying===0)
    {
        content = <div>Cart is empty</div>
    }
    else 
    {
        content=<Carts books={cartCtx}/>
    }

    console.log(cartCtx);

    const history= useHistory();
    const redirectToHome= () => {
        history.push('/');
    };
    const redirectToCheckout= () => {
        history.push('/checkout');
    };

    return(
      
          <div className='cartPage'>
              
      
             <div className="cartTitle"> Cart </div>
             <div className='cartBox'>
              {content}
              <div>
                                    
                  
              </div>
              <div className='line'><div/>
              <br/>
              <br/>
              <br/>
          </div>
          <div className='cartFinalBox'>
              <div className='subtotal'>Subtotal: <div className='subtotalValue'>{cartCtx.totalPrice}</div></div>
              <div className='subtotal'>Delivery: <div className='subtotalValue'>20 EGP</div></div>
              <div>Total <div className='totalValue'>{cartCtx.totalPrice+20}</div></div>
              <button className= 'proceedChck' onClick={redirectToCheckout}>Proceed to Checkout</button>
          </div>
          <button className= 'addMoreBox' onClick={redirectToHome}>Add More Items</button>
      
          </div>
          </div>);
  }

export default CartPage;
