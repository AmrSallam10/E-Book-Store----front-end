import { useState, useContext } from "react";
import classes from "../components/ui/Cart.css";
import CartContext from '../store/cart-context'
function CartItem(props) {
    const cartCtx= useContext(CartContext);
    const bookInCart= cartCtx.inCart(props.id);
    function toggleCartStatusHandler(){
        cartCtx.addToCart({
            key:props.id, 
            id: props.id,
            image:{data:props.image, type:0}, 
            bookTitle:props.title,
            bookGenre:props.genre,
            bookPrice:props.price,
            bookQuantity: parseInt(props.quantity)
        })
    }
    const [quantity, setQuantity] = useState(0);
    function toggleDeleteHandler(){
        cartCtx.removeFromCart(props.id);
    }
    function handleQuantityChange(evt) {
        setQuantity(evt.target.value);
    }


    return (
        <div className="parent">

<img className= "cartImage" src={"data:image/png;base64, "+props.image} alt={props.title}/>
<div className="cartItem">
            <div className='leftLine' />
            <div className='cartBox'>
                <div>
                    <div className='bookTitleCart'>{props.title}</div>
                    <div className='genre'>{props.genre}</div>
                
                    {/* <div>{props.quantity}</div> */}
                    <div>{props.price} EGP</div>
                    <input type="number" value={props.quantity} onChange={handleQuantityChange}/>
                    <button className='deleteButton' onClick={toggleDeleteHandler}>Delete</button>
                    <br/>
                </div>
                
        </div> 
        
        </div> 
        <div className='line'>
            </div>

        </div>
      

        );
}
export default CartItem;