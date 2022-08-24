// import { useHistory } from 'react-router-dom';
// import Books from '../components/Books';
// import CartItem from '../components/CartItem';
// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import "../components/ui/Cart.css";
// import CartContext from '../store/cart-context';
// function Carts() {

//     const url = 'http://localhost:8080/api/bookstore/images/';
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         axios.get(url)
//           .then((response) => response.data)
//           .then(setData);
//       }, []);
//       if (data) {
//         return (
//             <div>
//                 {data.map(book =>  
//                 <CartItem 
//                 key={book.id} 
//                 image={book.image.data} 
//                 title={book.bookTitle}
//                 genre={book.bookGenre}
//                 price={book.bookPrice} />
//                 )}
//             </div>
//         );
//       }
// }

// function CartPage(props) {
//     const cartCtx= useContext(CartContext);
//     let content;
//     if (cartCtx.totalBuying===0)
//     {
//         content = <div>Cart is empty</div>
//     }
//     else 
//     {
//         content=<Books books={cartCtx.buying}/>
//     }

//     function toggleDeleteHandler(){
//         cartCtx.removeFromCart(props.id);
//     }
//     const history= useHistory();
//     const redirectToHome= () => {
//         history.push('/');
//     };
//     const redirectToCheckout= () => {
//         history.push('/checkout');
//     };


//             /*return (
//               <div>
//                 <ul>
//                     {data.map(
//                         item => <li key={item.id}>
//                           <p>{item.bookTitle}</p>
//                           </li>
//                     )}
//                 </ul>
//               </div>
//             );*/


//     return(
      
//     <div className='cartPage'>
        

//        <div className="cartTitle"> Cart </div>
//        <div className='cartBox'>
//        <Carts />
//         {content}
//         <div>
//             <img className= "cartImage" src={props.image} alt={props.title}/>
//             <div className='bookTitleCart'>{props.title}</div>
//             <div className='genre'>{props.genre}</div>
//             <div className='description'>{props.description}</div>
           
//             <div>{props.quantity}</div>
            
//             <button className='deleteButton' onClick={toggleDeleteHandler}>Delete</button>
//             <div>{props.price}</div>
//         </div>
//         <div className='line'><div/>
//     </div>
//     <div className='cartFinalBox'>
//         <div className='subtotal'>Subtotal </div>
//         <div className='subtotal'>Delivery: 20 EGP</div>
//         <div>Total</div>
//         <button className= 'proceedChck' onClick={redirectToCheckout}>Proceed to Checkout</button>
//     </div>
//     <button className= 'addMoreBox' onClick={redirectToHome}>Add More Items</button>

//     </div>
//     </div>);
// }

// export default CartPage;

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
            {props.data.map(book =>  
            <CartItem 
            key={book.id} 
            image={book.image.data} 
            title={book.bookTitle}
            genre={book.bookGenre}
            price={book.bookPrice} />
            )}
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
        content=<Books books={cartCtx.buying}/>
    }

    function toggleDeleteHandler(){
        //cartCtx.removeFromCart(props.id);
    }
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
                                    
                  <button className='deleteButton' /*onClick={toggleDeleteHandler}*/>Delete</button>
              </div>
              <div className='line'><div/>
          </div>
          <div className='cartFinalBox'>
              <div className='subtotal'>Subtotal </div>
              <div className='subtotal'>Delivery: 20 EGP</div>
              <div>Total</div>
              <button className= 'proceedChck' onClick={redirectToCheckout}>Proceed to Checkout</button>
          </div>
          <button className= 'addMoreBox' onClick={redirectToHome}>Add More Items</button>
      
          </div>
          </div>);
  }

export default CartPage;
