

import { useHistory } from 'react-router-dom';
import Books from '../components/Books';
import CartItem from '../components/CartItem';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../components/ui/Cart.css";
import CartContext from '../store/cart-context';

function calculateSubtotal (buying)
{

    /*const sum = userBuys.reduce(add, 0); 

    function add(accumulator, a) {
    return (accumulator.price*accumulator.quantity) + a;
    }*/

    // var totalSum = buying.reduce((accumulator, a) => {
    //   return (parseInt(accumulator.bookPrice)*parseInt(accumulator.bookQuantity)) + parseInt(a);
    //   }, 0)
var SUM =0;
  var totalSum = buying.map(product => SUM+= (parseInt(product.bookPrice) * parseInt(product.bookQuantity)));

  console.log("TOTAL SUM: ", totalSum);
  return totalSum;
  // sum = product.price * product.quantity

  // sum = buying.book.price * buying.book.quantity
  // totalSum += sum
}


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
    const [cartSum, setCartSum] = useState(0);
    useEffect(() => {
      const sum = calculateSubtotal(cartCtx.buying);
      setCartSum(sum);
    },[cartCtx.buying, cartCtx.removeFromCart])
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
              
          <div>
             <div className="cartTitle"> Cart </div>
             <div className='cartBox'>{content}</div>
              
              <br/>
              </div>
          <div className='cartFinalBox'>
              <div className='subtotal'>Subtotal: <div className='subtotalValue'>{cartSum[cartSum.length-1]}</div></div>
              <div className='subtotal'>Delivery: <div className='subtotalValue'>20 EGP</div></div>
              {/* <div>Total <div className='totalValue'>{cartCtx.totalBuying===0? 0:cartCtx.totalPrice+20}</div></div> */}
              <div>Total <div className='totalValue'>{cartCtx.totalBuying===0? 0: parseInt(cartSum[cartSum.length-1])+parseInt(20)}</div></div>
              <button className= 'proceedChck' onClick={redirectToCheckout}>Proceed to Checkout</button>
          </div>
          <button className= 'addMoreBox' onClick={redirectToHome}>Add More Items</button>
      
          
          </div>
         );
  }

export default CartPage;
