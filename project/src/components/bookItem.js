import { useState, useContext } from "react";
import classes from "../components/ui/Home.css";
import CartContext from '../store/cart-context'
function BookItem(props) {
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
            bookQuantity: parseInt(quantity)
        })
    }
    const [quantity, setQuantity] = useState(0);
    
    function handleQuantityChange(evt) {
        setQuantity(evt.target.value);
    }


    return (
        <div>



        <div className="allBooks">

            <div className="imageContainer">
            <img src={"data:image/png;base64, "+props.image} className="image" alt={props.title} />
            <div className="bookTitle">{props.title}</div>
            <div className="bookGenre">{props.genre}</div>
            <div className="egp">EGP</div>
            <div className="price">{props.price}</div>
            <br/>
            <div className="quantity">Quantity</div>
            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <br/>
            <button className="addToCartButton" onClick={toggleCartStatusHandler}>Add to Cart</button>
            </div>

        </div> 

        </div>
        );
}
export default BookItem;