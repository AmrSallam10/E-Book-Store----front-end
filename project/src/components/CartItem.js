import classes from "../components/ui/Cart.css";

function CartItem(props) {

    let quantity = 0;

    return (
        <div>



        <div className='cartBox'>
                <div>
                    <img className= "cartImage" src={props.image} alt={props.title}/>
                    <div className='bookTitleCart'>{props.title}</div>
                    <div className='genre'>{props.genre}</div>
                
                    <div>{props.quantity}</div>
                    
                    <button className='deleteButton'>Delete</button>
                    <div>{props.price}</div>
                </div>
                <div className='line'><div/>
            </div>
        </div> 

        </div>
        );
}
export default CartItem;